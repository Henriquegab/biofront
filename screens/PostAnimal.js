import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';



const PostAnimal = () => {

  const [photo, setPhoto] = useState(null);
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [animal, setAnimal] = useState('')

  const selectPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };
  
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const limpar = () => {
    setTitulo('')
    setDescricao('')
    setAnimal('')
    setPhoto('')
  }
  
  const teste = () => {
    alert(photo)
  }


  return (
    <>
    
    <SafeAreaView edges={['right', 'left', 'top']} className="flex-1 bg-bioVerde">
    <View className="bg-bioVerde h-11 justify-end">
        <View className="h-12 justify-center flex-row">

        
          <View className="h-full w-1/4">
                
          </View>
          <View className="h-full w-2/4 justify-center items-center">
              <Text className="text-base pt-1 text-white font-semibold">Cadastro de animal</Text>
          </View>
          <TouchableOpacity onPress={limpar} className="h-full w-1/4 justify-center items-center">
                <Text className="text-sm pt-1 text-white font-light">Limpar</Text>
          </TouchableOpacity>
          

        </View>
    </View>
    <View className="bg-bioBrancoPrincipal flex-1">
        <KeyboardAwareScrollView
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            >
            <ScrollView className="">
              <View className="items-center pt-3">
                <TouchableOpacity onPress={selectPhoto} className="w-11/12 h-64 border-2 border-bioVerde rounded-lg border-dashed items-center justify-center mb-2">

                  <View className="h-36 w-44 flex-col">
                      <View className="h-2/4 items-center justify-end">
                        <Ionicons
                          name='camera-outline' // "home-outline" para contorno e "home" para preenchido
                          color="#607f60"
                          size={48}
                        />
                      </View>
                      <View className="h-1/4 items-center justify-center">
                          <Text className="text-bioVerde font-semibold text-base">Incluir fotos</Text>
                      </View>
                      <View className="h-1/4 items-center justify-start">
                        <Text className="text-bioVerde font-light text-sm">Inclua sua foto aqui!</Text>
                      </View>
                     
                  </View>
                
                </TouchableOpacity>
                <View className="bg-white w-full">
                  <View className="w-full h-24 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/2 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Título</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-1/2 justify-center">
                          <TextInput onChangeText={setTitulo} selectionColor={'green'} value={titulo} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Animal encontrado...'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-32 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/3 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Descrição</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-2/3 justify-center">
                          <TextInput onChangeText={setDescricao} selectionColor={'green'} value={descricao} editable multiline numberOfLines={3} maxLength={150} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Digite sua descrição aqui'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-24 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/2 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Animal</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-1/2 justify-center">
                          <TextInput onChangeText={setAnimal} selectionColor={'green'} value={animal} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Nome do animal'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-24 items-center">
                    <TouchableOpacity
                      onPress={teste} className="bg-bioVerde rounded-xl py-4 items-center h-14 w-11/12 mt-4 justify-center">
                      <Text  className="text-white font-bold">CADASTRAR</Text>
                    </TouchableOpacity>
                  </View>

                </View>
              </View>
              
            </ScrollView>
        </KeyboardAwareScrollView>
    </View>
      
    </SafeAreaView>
    </>
  );
};

export default PostAnimal;
