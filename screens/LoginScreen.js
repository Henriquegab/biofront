import { View, Text, SafeAreaView, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../assets/logos.png'
import email from '../assets/email3.png'

const LoginScreen = () => {


  const [text, onChangeText] = React.useState('Email');

  return (
    <>
    <SafeAreaView className="">

      
      

        
        
    </SafeAreaView>

    <LinearGradient
        // Background Linear Gradient
        colors={['#91EAE2', '#A0F0A6', '#6AE773']}
        
        
        className="border-solid border-2 border-red-800 flex-1 items-center justify-start"
      >
        <View className="border-2 w-64 items-center mt-16">
         <Image className="w-24 h-24" source={logo}></Image>
         <Text className="font-bold text-white text-lg">BioFront</Text> 

        </View>
        <View className=" border-white w-80 h-96 items-center mt-16 pt-4">
          <View className="flex-row rounded-3xl border-2 border-white">
            <View className="w-10 rounded-full justify-center items-center">
              <Image source={email} className="h-6 w-8 ml-1"></Image>
            </View>
            <TextInput className="w-64 h-10  border-white rounded-r-3xl p-1" onChangeText={onChangeText} value={text}></TextInput>
          </View>
          
          

        </View>
        
      </LinearGradient>
    </>
  )
}


export default LoginScreen


