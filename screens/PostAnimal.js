import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as ImagePicker from 'expo-image-picker';
import CampoText from '../components/CampoText';

const PostAnimal = () => {
  
  const [photo, setPhoto] = useState(null);

//   const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Aqui você pode enviar os dados para sua API ou realizar qualquer outra ação necessária
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

        <View className="border-2 h-auto w-11/12 m-2">
                {photo && <Image source={{ uri: photo }} style={styles.photo} />}

            <View className="flex-row space-x-6 justify-center">
                <View>

                    <Button title="Selecionar Foto" onPress={selectPhoto} />
                </View>
                <View>
                    <Button title="Tirar Foto" onPress={takePhoto} />
                </View>
                
            </View>


            <CampoText placeholder="Espécie"></CampoText>
            <CampoText placeholder="Animal"></CampoText>
            <CampoText placeholder="Administrador"></CampoText>

        </View>

        
        
      

      {/* <Text style={styles.label}>Espécie</Text>
      <Controller
        control={control}
        name="species"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
          />
        )}
        rules={{ required: true }}
      />
      {errors.species && <Text style={styles.error}>Campo obrigatório.</Text>}
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
          />
        )}
        rules={{ required: true }}
      />
      {errors.name && <Text style={styles.error}>Campo obrigatório.</Text>}

      <Text style={styles.label}>Espécie</Text>
      <Controller
        control={control}
        name="species"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
          />
        )}
        rules={{ required: true }}
      />
      {errors.species && <Text style={styles.error}>Campo obrigatório.</Text>} */}

      <View>
                {/* <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} />  */}
        </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
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
    height: 200,
    marginTop: 16,
  },
});

export default PostAnimal;
