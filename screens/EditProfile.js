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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-8"
      >
        <View className="items-center mb-8">
          <Image
            source={require('../assets/logo.jpg')}
            className="w-16 h-16"
          />
        </View>

        <View className="mb-6">
          <Text className="text-white text-2xl font-bold text-center">SIGN IN</Text>
          <View className="flex-row justify-center space-x-4 mt-2">
            <Text className="text-white font-semibold">SIGN IN</Text>
            <Text className="text-gray-400">SIGN UP</Text>
          </View>
        </View>

        <TextInput
          placeholder="Username"
          // value={username}
          // onChangeText={setUsername}
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />

        <TextInput
          placeholder="Password"
          // value={password}
          // onChangeText={setPassword}
          secureTextEntry
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />

        <View className="flex-row items-center mb-6">
          <TouchableOpacity
            // onPress={() => setStaySignedIn(!staySignedIn)}
            className="mr-2 w-5 h-5 border border-gray-400 rounded"
          >
            {/* {staySignedIn && (
              <View className="flex-1 bg-green-500 m-0.5 rounded-sm" />
            )} */}
          </TouchableOpacity>
          <Text className="text-gray-400">Stay signed in</Text>
        </View>

        <TouchableOpacity
          // onPress={handleLogin}
          className="bg-green-500 rounded-full py-4 items-center"
        >
          <Text className="text-white font-bold">SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-4">
          <Text className="text-gray-400 text-center">Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default ChangePassword


