import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const LoadingComponent = () => {
  return (
    <View className="flex-1 justify-center items-center bg-bioBrancoPrincipal">
        <ActivityIndicator size="large" color="green" />
    </View>
  )
}

export default LoadingComponent