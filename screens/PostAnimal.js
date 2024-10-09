import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView, Button, StyleSheet, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import LoadingComponent from '../components/LoadingComponent';
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



const PostAnimal = () => {

  const [photo, setPhoto] = useState(null);
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [animal, setAnimal] = useState('')
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation();


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

  const limpar = () => {
    setTitulo('')
    setDescricao('')
    setAnimal('')
    setPhoto('')
  }
  
  const cadastrar = async () => {
    if (titulo.length === 0) return;
    

    try{
      const token = await AsyncStorage.getItem('token');
      await setLoading(true);

      const data = new FormData();

      const filename = photo.substring(photo.lastIndexOf('/') + 1, photo.length);
      const extension = filename.split('.')[1]

      data.append('imagem', JSON.parse(JSON.stringify({name:filename,uri: photo,type:'image/'+ extension})));

      data.append('titulo', titulo);
      data.append('descricao', descricao);
      data.append('animal', animal);
      data.append('lat', "1");
      data.append('lon', "1");

      const enviar = await axios.post(global.apiUrl+'/api/animal', data, {headers: { 'Accept': 'application/json',"Content-Type": `multipart/form-data`, 'Authorization': `Bearer ${token}` }}).then(function (res_api){
        Toast.show(res_api.data.message, {
          position: 70
        })
        console.log(res_api.data.message)
      }).catch(function (error){
        console.log(error.request)
        
      }).finally(()=> {
        setTitulo('')
        setDescricao('')
        setAnimal('')
        setPhoto('')
        setLoading(false);
        navigation.navigate("Menu");
      })

    }
    catch(error){
      Toast.show('Erro ao salvar a imagem: ' + error, {
        position: 70,
      });
      console.error('Erro ao salvar a imagem:', error);
    }
  }

  if (loading) {
    // Exibe um indicador de carregamento enquanto espera a resposta da API
    return (
      <LoadingComponent />
    );
  }

  return (
    <>
    
    <SafeAreaView edges={['right', 'left', 'top']} className="flex-1 bg-bioVerde">
    <View className="bg-bioVerde h-11 justify-end">
        <View className="h-12 justify-center flex-row">

        
          <View className="h-full w-1/4">
                
          </View>
          <View className="h-full w-2/4 justify-center items-center">
              <Text className="text-base pt-1 text-white font-semibold">Cadastro de animal</Text>
          </View>
          <TouchableOpacity onPress={limpar} className="h-full w-1/4 justify-center items-center">
                <Text className="text-sm pt-1 text-white font-light">Limpar</Text>
          </TouchableOpacity>
          

        </View>
    </View>
    <View className="bg-bioBrancoPrincipal flex-1">
        <KeyboardAwareScrollView
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            >
            <ScrollView className="">
              <View className="items-center pt-3">
                <TouchableOpacity onPress={selectPhoto} className="w-11/12 h-64 border-2 border-bioVerde rounded-lg border-dashed items-center justify-center mb-2">
                

                  {photo ? <Image className="w-11/12 h-60 rounded-lg" source={{ uri: photo }} /> :
                  
                  <View className="h-36 w-44 flex-col">
                    
                      <View className="h-2/4 items-center justify-end">
                        <Ionicons
                          name='camera-outline' // "home-outline" para contorno e "home" para preenchido
                          color="#607f60"
                          size={48}
                        />
                      </View>
                      <View className="h-1/4 items-center justify-center">
                          <Text className="text-bioVerde font-semibold text-base">Incluir fotos</Text>
                      </View>
                      <View className="h-1/4 items-center justify-start">
                        <Text className="text-bioVerde font-light text-sm">Inclua sua foto aqui!</Text>
                      </View>
                     
                  </View>

                  }
                  
                
                </TouchableOpacity>
                <View className="bg-white w-full">
                  <View className="w-full h-24 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/2 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Título</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-1/2 justify-center">
                          <TextInput onChangeText={setTitulo} selectionColor={'green'} value={titulo} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Animal encontrado...'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-32 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/3 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Descrição</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-2/3 justify-center">
                          <TextInput onChangeText={setDescricao} selectionColor={'green'} value={descricao} editable multiline numberOfLines={3} maxLength={150} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Digite sua descrição aqui'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-24 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/2 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Animal</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-1/2 justify-center">
                          <TextInput onChangeText={setAnimal} selectionColor={'green'} value={animal} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Nome do animal'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-24 items-center">
                    <TouchableOpacity
                      onPress={cadastrar} className="bg-bioVerde rounded-xl py-4 items-center h-14 w-11/12 mt-4 justify-center">
                      <Text  className="text-white font-bold">CADASTRAR</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
              
            </ScrollView>
            
        </KeyboardAwareScrollView>
    </View>
      
    </SafeAreaView>
    </>
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
