import { View, Text, SafeAreaView, SafeAreaViewBase, ScrollView, TouchableOpacity } from 'react-native'
import MenuButton from '../components/MenuButton'
import React from 'react'
import ComponentTest from '../components/ComponentTest'

const MainMenu = () => {
  return (
    <>
    
        <SafeAreaView className="flex-1 bg-bioBrancoPrincipal">
            
        
          <ScrollView className="">
            <View className="flex-col px-1 pt-5 ">
              <MenuButton title="Encontrei um rastro de animal" animal="Formiga" especie="inseto" autor="4 de agosto 19:28" image={require('../assets/fumiga.jpg')}></MenuButton>
              <MenuButton title="Macaco encontrado na floresta" animal="Macaco" especie="Lêmure" autor="4 de agosto 19:28" image={require('../assets/macaco.jpg')}></MenuButton>
              <MenuButton title="Leão bugado" especie="mamífero" animal="Leão" autor="4 de agosto 19:28" image={require('../assets/leao.jpg')}></MenuButton>
              
              
              
              
              
              
            </View>
            
                  
                  
            
          </ScrollView>
        </SafeAreaView>
    </>
  )
}

export default MainMenu