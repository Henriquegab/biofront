import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, ButtonText, Pressable, TouchableOpacity, StatusBar, ActivityIndicator, Button, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png';
import email from '../assets/email3.png';
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-root-toast';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

   async function handleLogin() {



    if (email.length === 0) return;

    setLoading(true);

    try {

      const credentials = {
        email: email,
        password: password
      }

      const res = await axios.post(global.apiUrl + '/api/login', credentials).then(function (res_api) {
        
        setResponse(res_api.data);

        try {
          AsyncStorage.setItem('token', res_api.data.data.token);
          setLoading(false);
          navigation.replace('Main');
        } catch (e) {
          setLoading(false);
          console.error('Erro ao salvar o token:', e);
        }


      }).catch(function (error) {
        
        Toast.show(error.response.data.message)
        
      });

    } catch (error) {
      setLoading(false);
      console.error('Erro ao fazer a requisição POST:', error);
    }

    setLoading(false);
  
    
  };


  const cadastrar = () => {
    
    navigation.navigate('Register');
  };

  const esqueceuSenha = () => {
    navigation.navigate('ForgotPassword');
  };

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
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
          <View className="flex-1 items-center justify-center bg-bioBrancoPrincipal">
            
            <View className="w-64 items-center">
              <Image className="w-28 h-28" source={logo} />
              <Text className="font-bold text-black text-lg">BioFront</Text>
            </View>
            <View className="w-80 items-center mt-16 pt-4 pb-1 space-y-6">
              <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
                <TextInput onChangeText={setEmail} value={email} placeholder="Email" maxLength={40} className="w-72 h-10 px-2" />
              </View>

              <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
                <TextInput onChangeText={setPassword} value={password} secureTextEntry={true} placeholder="Senha" maxLength={40} className="w-72 h-10 px-2" />
              </View>
            </View>

            <View className="flex-2 w-80 items-end pr-6">
              <View className="flex-row rounded-sm pb-8">
                <TouchableOpacity onPress={esqueceuSenha}>
                  <Text className="text-blue-800">Esqueceu sua senha?</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="flex-row rounded-sm">
              <LoginButton press={handleLogin} title="Login" />
            </View>

            <View className="flex-row rounded-sm mt-4">
              <Text className="text-bioTextoCinzaMaisEscuro text-sm">Não tem uma conta? </Text>
              <TouchableOpacity onPress={cadastrar}>
                <Text className="text-blue-800 font-semibold">Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
