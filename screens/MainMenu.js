import { View, Text, SafeAreaView, SafeAreaViewBase, ScrollView, TouchableOpacity } from 'react-native'
import MenuButton from '../components/MenuButton'
import React from 'react'

const MainMenu = () => {
  return (
    <>
    
        <SafeAreaView className="bg-bioPrincipal">
            
        </SafeAreaView>
        <ScrollView>
          <View className="flex-1 flex-col px-1 pt-5">
            <MenuButton title="Formiga" especie="inseto" autor="4 de agosto 19:28, henrique gabriel" image={require('../assets/fumiga.jpg')}></MenuButton>
            <MenuButton title="macaco" especie="Lêmure" autor="4 de agosto 19:28, henrique gabriel" image={require('../assets/macaco.jpg')}></MenuButton>
            <MenuButton title="Leão" especie="mamífero" autor="4 de agosto 19:28, henrique gabriel" image={require('../assets/leao.jpg')}></MenuButton>
            
            
            
            
            
            
          </View>
          
                
                
          
        </ScrollView>
    </>
  )
}

export default MainMenu