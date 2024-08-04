import { View, Text, Image } from 'react-native'
import React from 'react'

const CardProfileComponent = () => {
  return (
    

        <View className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <View className="flex justify-end px-4 pt-4">
                
            </View>
            <View className="flex flex-col items-center pb-10">
                <Image className="w-24 h-24 mb-3 rounded-full" source={require('../assets/logo.jpg')} alt="Bonnie image"/>
                <Text className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sistema dos Urso</Text>
                <Text className="text-sm text-gray-500 dark:text-gray-400">Em produção</Text>
                <View className="flex mt-4 md:mt-6">
                    
                </View>
            </View>
        </View>

  )
}

export default CardProfileComponent