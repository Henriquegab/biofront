import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png'
import email from '../assets/email3.png'

const RegisterScreen = () => {


  const [text, onChangeText] = React.useState('Email');

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
              <TouchableOpacity>
                <Text className="text-blue-800" >Esqueceu sua senha?</Text>
              </TouchableOpacity>
              
            </View>
          </View>
          <View>
            <View className="flex-row rounded-sm">
                <TouchableOpacity className="items-center h-11 w-64 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <Text className="text-white text-sm font-semibold">Login</Text>
                </TouchableOpacity>
                
            </View>
          </View>
          <View>
            <View className="flex-row rounded-sm mt-4">
                
                  <Text className="text-bioTextoCinzaMaisEscuro text-sm">Não tem uma conta? </Text>
                  <TouchableOpacity><Text className="text-blue-800 font-semibold">Cadastre-se</Text></TouchableOpacity>
                
                
            </View>
          </View>

      </View>
      
          
          
      
    </>
  )
}


export default RegisterScreen


