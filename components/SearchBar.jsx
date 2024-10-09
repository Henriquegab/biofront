import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View className="w-max mx-3 h-12 rounded-full bg-white mt-4 flex-row">
      <TouchableOpacity className="h-12 w-2/12 justify-center items-center">
        <Ionicons
            name='search' // "home-outline" para contorno e "home" para preenchido
            color="#607f60"
            size={24}
        />
      </TouchableOpacity>
      <View className="h-12 w-10/12">
        <TextInput className="flex-1 pr-2" placeholder='Buscar...'></TextInput>
      </View>
      
    </View>
  )
}

export default SearchBar