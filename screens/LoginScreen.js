import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">

        <View className="border-solid border-2 border-red-800 w-11/12 h-1/2 rounded-3xl flex-col space-y-2">
            <View className="border-solid border-2 border-red-800 h-32 mx-8 mt-4">
                    {/* imagem */}
            </View>
            <View className="border-solid border-2 border-red-800 h-32 mx-8" >

            </View>
            <View className="border-solid border-2 border-red-800 h-32 mx-8">

            </View>
        </View>

        <View className="justify-center items-center">
            <Text className="text-red-800">LoginScreen</Text>
        </View>
        
    </SafeAreaView>
  )
}

export default LoginScreen