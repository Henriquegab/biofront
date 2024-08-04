import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuButton = (props) => {
  return (
    
        <TouchableOpacity onPress={props.press} className="flex-1 border-b-2 border-bioPrincipal flex-row rounded-md bg-white my-1 w-max h-32 justify-center content-center drop-shadow-lg">
          <View className="w-2/5 h-full">
            <Image
              source={props.image}
              className="w-full h-full rounded-l-md"
            />
          </View>
          <View className="w-3/5 h-full">
            <View className="w-full h-1/3 justify-start">
                <Text className="text-bioTextoCinzaMaisEscuro font-light text-md text-left ml-2 mt-2">{props.title}</Text>
            </View>
            <View className="w-full h-1/3 justify-center">
                <Text className="text-black text-md text-left ml-2">{props.especie}</Text>
            </View>
            <View className="w-full h-1/3 justify-end">
                <Text className="text-bioTextoCinzaMaisEscuro text-xs font-normal text-left ml-2 mb-2">{props.autor}</Text>
            </View>
            
          </View>

          
        </TouchableOpacity>
    
  )
}

export default MenuButton