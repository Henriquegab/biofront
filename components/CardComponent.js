import { View, Text } from 'react-native'
import React from 'react'

const CardComponent = ({children}) => {
  return (
    
      
        <View className="block border py-8 px-5 mx-1 w-11/12 bg-white border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            {children}
        </View>

    
  )
}

export default CardComponent