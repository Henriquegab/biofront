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
import LoadingComponent from '../components/LoadingComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null)

  // State variable to track password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
      setShowPassword(!showPassword);
  };

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
          AsyncStorage.setItem('username', res_api.data.data.user.name);
          setLoading(false);
          navigation.replace('Main');
        } catch (e) {
          setLoading(false);
          console.error('Erro ao salvar o token:', e);
        }


      }).catch(function (error) {
        
        Toast.show(error.response.data.message, {
          position: 70
        })
        
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
      <LoadingComponent />
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
          <Text className="text-white text-2xl font-bold text-center">BIOFRONT</Text>
          <View className="flex-row justify-center space-x-4 mt-2">
            <View className="border-b border-bioVerde">
                <Text className="text-white font-semibold">ENTRAR</Text>
            </View>
            
            <TouchableOpacity onPress={cadastrar}>
              <Text className="text-gray-400">CADASTRAR</Text>
            </TouchableOpacity>
            
          </View>
        </View>

        <TextInput
          onChangeText={setEmail} selectionColor={'green'} value={email} placeholder="Email" maxLength={40}
          // value={username}
          // onChangeText={setUsername}
          className="bg-zinc-800 text-white rounded-md p-4 mb-4"
          placeholderTextColor="#9CA3AF"
        />
        <View className="bg-zinc-800 text-white rounded-md p-4 mb-4 flex-row justify-between">
          <TextInput
            onChangeText={setPassword} selectionColor={'green'} value={password} secureTextEntry={!showPassword} placeholder="Senha" maxLength={40} keyboardType="ascii-capable"
            className="text-white pr-2 flex-1"
            placeholderTextColor="#9CA3AF"
          />
          <MaterialCommunityIcons
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={24}
                    color="#aaa"
                    className="ml-10 border border-white"
                    onPress={toggleShowPassword}
                />

        </View>
        

        

        <TouchableOpacity
          className="bg-bioVerde rounded-full py-4 items-center"
          onPress={handleLogin}
        >
          <Text className="text-white font-bold">ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={esqueceuSenha} className="mt-4">
          <Text className="text-gray-400 text-center">Esqueceu a senha?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default LoginScreen;
