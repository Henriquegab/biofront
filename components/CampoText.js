import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import { useForm, Controller, Form } from 'react-hook-form';

const CampoText = ({mudarValor, placeholder, title = "", text}) => {

  const [campo, setCampo] = useState('');

  const handleText = (value) => {
    setCampo(value)
    mudarValor(value)
  }

  return (
    
      
      <View class="mb-5">
        {/* <Text for="email" className="block text-sm font-medium text-gray-900 dark:text-white">{title}</Text> */}
        {(text ? <TextInput inputMode='text' maxLength={200} textAlignVertical='top' multiline numberOfLines={4} onChangeText={handleText} className="bg-gray-50 border mt-3 mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} /> : <TextInput onChangeText={handleText} className="bg-gray-50 border mt-3 mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />) }
      </View>
      
      /*{ <Button title="enviar" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"></Button> }*/
    
    
  )
}

export default CampoText