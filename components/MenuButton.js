import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuButton = (props) => {
  return (
    
        <TouchableOpacity onPress={props.press} className="flex-1 border flex-row rounded-xl bg-zinc-700 my-1 w-max h-36 justify-center content-center drop-shadow-lg">
          <View className="w-2/5 h-full">
            <Image
              source={props.image}
              className="w-full h-full rounded-l-xl"
            />
          </View>
          <View className="w-3/5 h-full">
            <View className="w-full justify-start">
                <Text className="text-white font-semibold text-md text-left ml-4 mt-4 mr-2">{props.title.length > 24 ? props.title.slice(0, 24) + "..." : props.title}</Text>
            </View>
            <View className="w-full justify-start">
                <Text className="text-gray-400 text-md text-left ml-4">{props.animal} • {props.especie}</Text>
            </View>
            <View className="w-full h-3/5 justify-end">
                <Text className="text-gray-400 text-md text-left ml-4 mb-2">{props.autor}</Text>
            </View>
            
          </View>

          
        </TouchableOpacity>
    
  )
}

export default MenuButton