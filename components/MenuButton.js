import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const MenuButton = (props) => {
  return (
    
        <TouchableOpacity style={styles.box} onPress={props.press} className="flex-1 flex-row rounded-xl bg-white my-2 mx-3 w-max h-36 justify-center content-center shadow-md">
          <View className="w-2/5 h-full">
            <Image
              source={props.image}
              className="w-full h-full rounded-l-xl"
            />
          </View>
          <View className="w-3/5 h-full">
            <View className="w-full h-2/5 justify-start">
                <Text lineBreakMode='clip' className="text-bioTextoCinzaEscuro font-semibold text-md text-left ml-4 mt-4 mr-2">{props.title.length > 24 ? props.title.slice(0, 46) + "..." : props.title}</Text>
            </View>
            <View className="w-full h-1/5 justify-center">
                <Text className="text-gray-400 text-md text-left ml-4">{props.animal}</Text>
            </View>
            <View className="w-full h-2/5 justify-end">
                <Text className="text-gray-400 text-md text-left ml-4 mb-2">{props.autor}</Text>
            </View>
            
          </View>

          
        </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  box: {
    // ...
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default MenuButton