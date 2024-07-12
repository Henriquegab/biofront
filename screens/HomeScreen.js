import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CardProfileComponent from '../components/CardProfileComponent'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View>
            <CardProfileComponent/>
        </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen