import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from '@expo/vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import DismissKeyboard from '../components/DismissKeyboard';
import LoadingComponent from '../components/LoadingComponent';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { loadImage } from '../utils/imageUtils';
import saveProfileImage from '../utils/imageSaver';
import ImageSelector from '../components/ImageSelector';

const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [imageNotSave, setImageNotSave] = useState(null);
  const [username, setUsername] = useState('user');
  const navigation = useNavigation();
  
  const fileName = 'user_profile.jpg';
  const assetPath = `${FileSystem.documentDirectory}${fileName}`;

  useFocusEffect(
    useCallback(() => {
      const fetchUsername = async () => {
        const value = await AsyncStorage.getItem('username');
        if (value) setUsername(value);
      };
      fetchUsername();
      loadImage(fileName, setImageUri, setImageNotSave);
    }, [])
  );


  const handleCancel = async () => {
    const name = await AsyncStorage.getItem('username');
    setUsername(name);
    navigation.navigate("Perfil");
  };


  const saveImage = async () => {
    if (!imageNotSave) {

      try {
       
        await AsyncStorage.removeItem('username');

        // const res = await axios.patch(global.apiUrl + '/api/login', credentials).then(function (res_api) {
        
        //   setResponse(res_api.data);
  
        //   try {
        //     AsyncStorage.setItem('token', res_api.data.data.token);
        //     AsyncStorage.setItem('username', res_api.data.data.user.name);
        //     setLoading(false);
        //     navigation.replace('Main');
        //   } catch (e) {
        //     setLoading(false);
        //     console.error('Erro ao salvar o token:', e);
        //   }
  
  
        // }).catch(function (error) {
          
        //   Toast.show(error.response.data.message, {
        //     position: 70
        //   })
          
        // });





        await AsyncStorage.setItem('username', username);
        
      } catch (error) {
        console.error('Erro ao atualizar o perfil do usuário:', error);
      }


      navigation.navigate("Perfil");
      return;
    }
    try {
      try {
       
        await AsyncStorage.removeItem('username');
        await AsyncStorage.setItem('username', username);
        
      } catch (error) {
        console.error('Erro ao atualizar o perfil do usuário:', error);
      }
      
      await saveProfileImage(imageNotSave, fileName, setImageUri, navigation);
    } catch (error) {
      Toast.show('Erro ao salvar a imagem: ' + error, {
        position: 70,
      });
      console.error('Erro ao salvar a imagem:', error);
    }
  };

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <View className="bg-zinc-800 w-full h-14 border-b border-zinc-700 rounded-t-xl flex-row justify-between items-center px-4">
        <TouchableOpacity onPress={handleCancel}>
          <Text className="text-white text-sm">Cancelar</Text>
        </TouchableOpacity>
        <Text className="text-white text-base font-semibold">Editar perfil</Text>
        <TouchableOpacity onPress={saveImage}>
          <Text className="text-white text-sm">Salvar</Text>
        </TouchableOpacity>
      </View>

      <DismissKeyboard>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1 justify-start px-7 py-8"
        >
          <View className="h-44 items-center justify-center">
            <ImageSelector imageUri={imageUri} imageNotSave={imageNotSave} setImageUri={setImageNotSave} />
          </View>

          <View className="h-14 flex-row border-b border-zinc-800">
            <View className="w-3/12 items-start justify-center">
              <Text className="text-white text-base font-semibold">Nome</Text>
            </View>
            <View className="w-9/12 justify-center items-start pl-8 pr-5">
              <TextInput
                selectionColor={'bioVerde'}
                maxLength={33}
                className="text-white w-full"
                value={username}
                onChangeText={setUsername}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    </SafeAreaView>
  );
};

export default EditProfile;
