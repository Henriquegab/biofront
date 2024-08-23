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
    <>
      <SafeAreaView className="flex-1 bg-zinc-900">







        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} className="flex-1 items-center justify-center bg-zinc-900">

          {/* <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        > */}



          <View className=" w-64 items-center">
            <View className="bg-white">
              <Image className="w-28 h-28" source={logo}></Image>
            </View>

            <Text className="font-bold text-white text-lg">BioFront</Text>

          </View>

          <View className="w-80 items-center mt-16 pt-4 pb-1 space-y-6">
            <View className="flex-row rounded-3xl h-12 bg-bioBrancoPrincipal">
              <View className="w-2 justify-center items-center">

              </View>
              <TextInput secureTextEntry={true} placeholderTextColor="gray" value={password} onChangeText={password => setPassword(password)} placeholder="Nova senha" maxLength={60} className="w-72 h-12 p-1 pl-3 text-zinc-800"></TextInput>
              {/* <TextInput secureTextEntry={true} placeholderTextColor="white" value={email} onChangeText={email => setEmail(email)} placeholder="Email" maxLength={60} className="w-64 h-10 p-1 text-white"></TextInput> */}
            </View>
            <View className="flex-row rounded-3xl h-12 bg-bioBrancoPrincipal">
              <View className="w-2 justify-center items-center">

              </View>
              <TextInput secureTextEntry={true} placeholderTextColor="gray" value={confirmPassword} onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} placeholder="Confirmar senha" maxLength={60} className="w-72 h-12 p-1 pl-3 text-zinc-800"></TextInput>
              {/* <TextInput secureTextEntry={true} placeholderTextColor="white" value={email} onChangeText={email => setEmail(email)} placeholder="Email" maxLength={60} className="w-64 h-10 p-1 text-white"></TextInput> */}
            </View>








          </View>


          <View>
            <View className="flex-row rounded-sm mt-6 ">
              <LoginButton press={handleChangePassword} title="Enviar"></LoginButton>

            </View>
          </View>




        </KeyboardAvoidingView>

      </SafeAreaView>




    </>
  )
}


export default ChangePassword


