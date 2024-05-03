import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png'
import email from '../assets/email3.png'
import LoginButton from '../components/LoginButton';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {


  const navigation = useNavigation();

  const [text, onChangeText] = React.useState('Email');

  const cadastrar = () => {
    navigation.navigate('Register')
  }

  const esqueceuSenha = () => {
    navigation.navigate('ForgotPassword')
  }
  const menu = () => {
    navigation.navigate('Menu')
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
              <TextInput placeholder="Email" maxLength={40} className="w-64 h-10 p-1"></TextInput>
            </View>

            <View className="flex-row rounded-sm border-2 border-bioTextoCinzaEscuro">
              <View className="w-2 justify-center items-center">
                
              </View>
              <TextInput secureTextEntry={true} placeholder="Senha" maxLength={40} className="w-64 h-10 p-1"></TextInput>
            </View>
            
            

            
            

          </View>
          <View className="flex-2 w-80 items-end pr-6">
            <View className="flex-row rounded-sm pb-8">
              <TouchableOpacity onPress={esqueceuSenha}>
                <Text className="text-blue-800" >Esqueceu sua senha?</Text>
              </TouchableOpacity>
              
            </View>
          </View>
          <View>
            <View className="flex-row rounded-sm">
                <LoginButton press={menu} title="Login"></LoginButton>
                
            </View>
          </View>
          <View>
            <View className="flex-row rounded-sm mt-4">
                
                  <Text className="text-bioTextoCinzaMaisEscuro text-sm">Não tem uma conta? </Text>
                  <TouchableOpacity onPress={cadastrar}><Text className="text-blue-800 font-semibold">Cadastre-se</Text></TouchableOpacity>
                
                
            </View>
          </View>

      </View>
      
          
          
      
    </>
  )
}


export default LoginScreen


