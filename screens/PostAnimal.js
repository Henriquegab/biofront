import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import CampoText from '../components/CampoText';
import CardComponent from '../components/CardComponent';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import CampoModal from '../components/CampoModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostAnimal = () => {
  
  const [photo, setPhoto] = useState(null);

  const [campo1, setCampo1] = useState('');
  const [campo2, setCampo2] = useState('');
  const [campo3, setCampo3] = useState('');
  const [mostrarModal, setmostrarModal] = useState(false);
  const [response, setResponse] = useState("");

  const { control, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit() {
    if(campo1 == "" || campo2 == "" || campo3 == "" || photo == null){
      Toast.show("Preencha todos os campos!")
    }
    else{
      setmostrarModal(true);

      const token = await AsyncStorage.getItem('token');
      try {
        const payload = {
          titulo: campo1,
          animal: campo2,
          descricao: campo3,
        }

        const res = await axios.post(global.apiUrl + '/api/animal', payload, {headers: {'Authorization': `Bearer ${token}`}}).then(function (res_api){
          setResponse(res_api.data)
          Toast.show(res_api.data.message)
          setmostrarModal(false);

        }).catch(function (error){
          Toast.show(error.response.data.message)
          setmostrarModal(false);
        })


      } catch (error) {
        setmostrarModal(false);
        Toast.show(error.message)
      }
      // requisição para api ou salvamento no celular
    }
  };

  const selectPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

        <CardComponent>
            <View className="mb-4 items-center">
                {photo && <Image source={{ uri: photo }} style={styles.photo} />}

            </View>
                    

            <View className="flex-row space-x-6 justify-center">
                <View>

                    <Button title="Selecionar Foto" onPress={selectPhoto} />
                </View>
                <View>
                    <Button title="Tirar Foto" onPress={takePhoto} />
                </View>
                
            </View>


            <CampoText mudarValor={(value) => setCampo1(value)} placeholder="Título"></CampoText>
            <CampoText mudarValor={(value) => setCampo2(value)} placeholder="Animal"></CampoText>
            <CampoText mudarValor={(value) => setCampo3(value)} placeholder="Descrição" text={true}></CampoText>

            <View>
                <Button className="" title="Cadastrar" onPress={handleSubmit(onSubmit)} /> 
            </View>

        </CardComponent>

      

      <CampoModal mostrarModal={mostrarModal}></CampoModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    justifyContent: 'start',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 4,
  },
  input: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  photo: {
    width: 200,
    height: 150,
    marginTop: 16,
  },
});

export default PostAnimal;
