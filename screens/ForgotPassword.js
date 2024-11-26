import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Pressable, TouchableOpacity, ActivityIndicator, Platform, KeyboardAvoidingView } from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png'
import email from '../assets/email3.png'
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import LoadingComponent from '../components/LoadingComponent';

const ForgotPassword = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false)
  
  const handleForgotPassword = async () => {
    if(email.length < 2){
      Toast.show("O email deve estar preenchido",{
        position: 70
      });
      return;
    }
    setLoading(true);

    try {

      const credentials = {
        email: email,
      }

      const res = await axios.post(global.apiUrl + '/api/user/forgot_password', credentials).then(function (res_api) {
        
        
        Toast.show(res_api.data.message,{
          position: 70
        });
        navigation.navigate('Login')


      }).catch(function (error) {
        
        Toast.show(error.response.data.message,{
          position: 70
        })
        
      });

    } catch (error) {
      setLoading(false);
      console.error('Erro ao fazer a requisição POST:', error)
    }

    setLoading(false);
  }


  if (loading) {
    // Exibe um indicador de carregamento enquanto espera a resposta da API
    return (
      <LoadingComponent />
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-bioBrancoPrincipal">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center px-8"
      >
        <View className="items-center mb-8">
          <Image
            source={require('../assets/images/urso.png')}
            className="w-16 h-16"
          />
        </View>

        <View className="mb-6">
          <Text className="text-bioTextoCinzaEscuro text-2xl font-bold text-center">BIOFRONT</Text>
          <View className="flex-row justify-center space-x-4 mt-2">
            <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} className="">
                <Text className="text-gray-400">ENTRAR</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
              <Text className="text-gray-400">CADASTRAR</Text>
            </TouchableOpacity>
            
          </View>
        </View>

        <TextInput
          onChangeText={setEmail} value={email} placeholder="Email" maxLength={40}
          // value={username}
          // onChangeText={setUsername}
          className="bg-white text-bioTextoCinzaEscuro rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />

        

        <TouchableOpacity
          className="bg-bioVerde rounded-xl py-4 items-center"
          onPress={handleForgotPassword}
        >
          <Text className="text-white font-bold">ENVIAR</Text>
        </TouchableOpacity>

        
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};



export default ForgotPassword


