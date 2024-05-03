import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MenuButton = (props) => {
  return (
    <View className="flex rounded-xl bg-bioPrincipal my-4 w-auto h-40 justify-center content-center shadow-lg shadow-gray-700/90">
              <View className="absolute w-52 h-40 justify-end items-center">
                
              </View>
            
              <TouchableOpacity onPress={props.press} className="flex-1 justify-end items-end pr-3 pb-3 shadow-lg shadow-gray-700/90">
              
                <Text className="text-white font-bold text-2xl text-center">{props.title}</Text>
              </TouchableOpacity>
    </View>
  )
}

export default MenuButton