import { View, Text, SafeAreaView, SafeAreaViewBase, ScrollView, TouchableOpacity } from 'react-native'
import MenuButton from '../components/MenuButton'
import React from 'react'

const MainMenu = () => {
  return (
    <>
    
        <SafeAreaView className="bg-bioPrincipal">
            
        </SafeAreaView>
        <ScrollView>
          <View className="flex-1 flex-col px-4 pt-5">
            <MenuButton title="Cadastrar Animal"></MenuButton>
            <MenuButton title="Lista de animais"></MenuButton>
            <MenuButton title="Gerenciar perfil"></MenuButton>
            <MenuButton title="Gerenciar perfil"></MenuButton>
            <MenuButton title="Gerenciar perfil"></MenuButton>
            
            
            
          </View>
          
                
                
          
        </ScrollView>
    </>
  )
}

export default MainMenu