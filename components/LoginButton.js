import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const LoginButton = (props) => {
  return (
    <TouchableOpacity onPress={props.press} className="items-center h-11 w-64 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  <Text className="text-white text-sm font-semibold">{props.title}</Text>
    </TouchableOpacity>
  )
}

export default LoginButton