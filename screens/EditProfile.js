import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Pressable, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png'
import email from '../assets/email3.png'
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from '@expo/vector-icons/Entypo';

const ChangePassword = () => {

  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  const handleChangePassword = async () => {

    

    if (password.length < 6 || password.length > 30) {
      Toast.show("A senha deve conter entre 6 e 30 digitos", {
        position: 70
      });
      return;
    }
    if (password != confirmPassword) {
      
      Toast.show("As senhas devem ser iguais!",{
        position: 70
      });
      return;
    }
    setLoading(true);
    const token = await AsyncStorage.getItem('token');

    // const navigation = useNavigation();
   

    try {

      const credentials = {
        password: password,
      }

      

      const res = await axios.patch(global.apiUrl + '/api/user/update_password', credentials, {headers: {'Authorization': `Bearer ${token}`}}).then(function (res_api) {

        setResponse(res_api.data);
        Toast.show(res_api.data.message, {
          position: 70
        });
        
        navigation.navigate('Perfil');


      }).catch(function (error) {

        Toast.show(error.response.data.message, {
          position: 70
        })

      });

    } catch (error) {
      setLoading(false);
      console.error('Erro ao fazer a requisição PATCH:', error);
    }

    setLoading(false);
  }

  

  if (loading) {
    // Exibe um indicador de carregamento enquanto espera a resposta da API
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-zinc-900">

    <View className="bg-zinc-800 w-full h-14 border-b border-zinc-700 rounded-t-xl flex-row justify-between items-center px-4">
      <TouchableOpacity onPress={()=> {navigation.navigate("Perfil")}}>
        <Text className="text-white text-sm">Cancelar</Text>
      </TouchableOpacity>
      <View>
        <Text className="text-white text-base font-bold">Editar perfil</Text>
      </View>
      <TouchableOpacity>
        <Text className="text-white text-sm">Salvar</Text>
      </TouchableOpacity>

    </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-start px-7 py-8"
      >
        <View className="h-44 items-center justify-center">
            <TouchableOpacity className=" h-36 w-36 justify-end items-center">
              <Image
                source={{ uri: 'https://instagram.fmoc2-1.fna.fbcdn.net/v/t51.2885-19/362384237_791464489192342_4511360389073602271_n.jpg?_nc_ht=instagram.fmoc2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=mq8yXUk2R_YQ7kNvgHyKfu6&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDUYh3P9PDoMfZaYrdq7P2Kf88rJ1qsonznodmIr6Bapw&oe=66C91DE0&_nc_sid=8f1549' }}
                className="w-36 h-36 rounded-full mb-2"
              />
              <View className=" w-10 h-10 rounded-xl absolute self-end bg-bioBrancoPrincipal items-center justify-center">
                <Entypo name="pencil" size={24} color="black" />
              </View>
            </TouchableOpacity>

        </View>
      

        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default ChangePassword


