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
import LoadingComponent from '../components/LoadingComponent';

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
      <LoadingComponent />
    );
  }

  const Header = () => (
    <View className="flex-row items-center p-4">
      <TouchableOpacity onPress={()=>{navigation.navigate('Perfil')}}>
        <Text className="text-white font-light">Voltar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <Header />
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
          <Text className="text-white text-2xl font-bold text-center">BIOFRONT</Text>
          {/* <View className="flex-row justify-center space-x-4 mt-2">
            <View className="border-b border-bioVerde">
                <Text className="text-white font-semibold">ENTRAR</Text>
            </View>
            
            <TouchableOpacity onPress={cadastrar}>
              <Text className="text-gray-400">CADASTRAR</Text>
            </TouchableOpacity>
            
          </View> */}
        </View>

        

        <TextInput
          value={password} onChangeText={password => setPassword(password)} placeholder="Nova senha" maxLength={30} secureTextEntry={true}
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />
        <TextInput
          secureTextEntry={true} value={confirmPassword} onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} placeholder="Confirmar senha" maxLength={30}
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />

        

        <TouchableOpacity
          className="bg-bioVerde rounded-full py-4 items-center"
          onPress={handleChangePassword}
        >
          <Text className="text-white font-bold">ALTERAR SENHA</Text>
        </TouchableOpacity>

        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );


  

};



export default ChangePassword


