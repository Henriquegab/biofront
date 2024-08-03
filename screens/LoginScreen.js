import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png';
import email from '../assets/email3.png';
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {

  

  const handleLogin = () => {
    
    // Supondo que a autenticação seja bem-sucedida, navegue para a tela principal
    navigation.replace('Main');
  };

  const [text, onChangeText] = React.useState('Email');

  const cadastrar = () => {
    
    navigation.navigate('Register');
  };

  const esqueceuSenha = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <>
      <SafeAreaView>
        {/* Seu conteúdo aqui */}
      </SafeAreaView>

      <View className="flex-1 items-center justify-center bg-bioBrancoPrincipal">
        <View className="w-64 items-center">
          <Image className="w-28 h-28" source={logo} />
          <Text className="font-bold text-black text-lg">BioFront</Text>
        </View>
        <View className="w-80 items-center mt-16 pt-4 pb-1 space-y-6">
          <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
            <View className="w-2 justify-center items-center" />
            <TextInput placeholder="Email" maxLength={40} className="w-64 h-10 p-1" />
          </View>

          <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
            <View className="w-2 justify-center items-center" />
            <TextInput secureTextEntry={true} placeholder="Senha" maxLength={40} className="w-64 h-10 p-1" />
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
    </>
  );
};

export default LoginScreen;
