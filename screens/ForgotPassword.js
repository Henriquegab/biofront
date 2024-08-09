import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png'
import email from '../assets/email3.png'
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import axios from 'axios';

const ForgotPassword = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)
  
  const handleForgotPassword = async () => {
    if(email.length < 2){
      Toast.show("O email deve estar preenchido");
      return;
    }
    setLoading(true);

    try {

      const credentials = {
        email: email,
      }

      const res = await axios.post(global.apiUrl + '/api/user/forgot_password', credentials).then(function (res_api) {
        
        setResponse(res_api.data);
        Toast.show(res_api.data.message);
        navigation.navigate('Login')


      }).catch(function (error) {
        
        Toast.show(error.response.data.message)
        
      });

    } catch (error) {
      setLoading(false);
      console.error('Erro ao fazer a requisição POST:', error);
    }

    setLoading(false);
  }

  const login = () => {
        navigation.navigate('Login')
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
    <SafeAreaView className="">

      
      

        
        
    </SafeAreaView>

      <View className="flex-1 items-center justify-center bg-bioBrancoPrincipal">

        <View className=" w-64 items-center">
            <Image className="w-28 h-28" source={logo}></Image>
            <Text className="font-bold text-black text-lg">BioFront</Text> 

          </View>
          <View className="w-80 items-center b mt-16 pt-4 pb-1 space-y-6">
            <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
              <View className="w-2 justify-center items-center">
                
              </View>
              <TextInput value={email} onChangeText={email => setEmail(email)} placeholder="Email" maxLength={60} className="w-64 h-10 p-1"></TextInput>
            </View>

            
            
            

            
            

          </View>
          
          <View>
            <View className="flex-row rounded-sm mt-6">
                <LoginButton press={handleForgotPassword} title="Enviar"></LoginButton>
                
            </View>
          </View>
          <View>
            <View className="flex-row rounded-sm mt-4">
                
                  <Text className="text-bioTextoCinzaMaisEscuro text-sm">Já tem uma conta? </Text>
                  <TouchableOpacity onPress={login}><Text className="text-blue-800 font-semibold">Faça login!</Text></TouchableOpacity>
                
                
            </View>
          </View>

      </View>
      
          
          
      
    </>
  )
}


export default ForgotPassword


