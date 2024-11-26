import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Pagination = () => {
  return (
    <View style={styles.box} className="w-11/12 m-3 h-14 rounded-lg bg-white items-center justify-center flex-row">
      <TouchableOpacity className="h-14 w-8 rounded-lg mx-1.5 items-center justify-center"><Text className="text-lg text-bioVerde font-bold">1</Text></TouchableOpacity>
      <TouchableOpacity className="h-14 w-8 rounded-lg mx-1.5 items-center justify-center"><Text className="text-base text-bioTextoCinzaEscuro font-normal">2</Text></TouchableOpacity>
      <TouchableOpacity className="h-14 w-8 rounded-lg mx-1.5 items-center justify-center"><Text className="text-base text-bioTextoCinzaEscuro font-normal">3</Text></TouchableOpacity>
      <TouchableOpacity className="h-14 w-8 rounded-lg mx-1.5 items-center justify-center"><Text className="text-base text-bioTextoCinzaEscuro font-normal">4</Text></TouchableOpacity>
      <TouchableOpacity className="h-14 w-8 rounded-lg mx-1.5 items-center justify-center"><Text className="text-base text-bioTextoCinzaEscuro font-normal">5</Text></TouchableOpacity>
      <TouchableOpacity className="h-14 w-8 rounded-lg mx-1.5 items-center justify-center"><Text className="text-base text-bioTextoCinzaEscuro font-normal">6</Text></TouchableOpacity>
      <TouchableOpacity className="h-14 w-8 rounded-lg mx-1.5 items-center justify-center"><Text className="text-base text-bioTextoCinzaEscuro font-normal">7</Text></TouchableOpacity>
      <TouchableOpacity className="h-14 w-8 rounded-lg mx-1.5 items-center justify-center"><Text className="text-base text-bioTextoCinzaEscuro font-normal">8</Text></TouchableOpacity>
      
    </View>
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

export default Pagination