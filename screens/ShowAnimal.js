import { View, Text, TouchableOpacity, Platform, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native';
import { FadeLoading } from 'react-native-fade-loading'

const ShowAnimal = ({ navigation }) => {

const route = useRoute();
const { animal } = route.params;
const [loadingimg, setLoadingimg] = useState(true);
const voltar = () => {
    navigation.navigate('Menu')
}


  return (
    <SafeAreaView edges={['right', 'left', 'top']} className="flex-1 bg-bioVerde">
        <View className="bg-bioVerde h-11 w-11/12 justify-center self-center">
            <View className="h-12 justify-center flex-row ">

            
            
                
                    <TouchableOpacity onPress={voltar}  className="h-full w-1/4 justify-center items-start ">
                        <Text className="text-sm pt-1 text-white font-light">Voltar</Text>
                    </TouchableOpacity> 
               
                <View className="h-full w-2/4 justify-center items-center">
                    <Text className="text-base pt-1 text-white font-semibold">Animal Cadastrado</Text>
                </View>
                <View className="h-full w-1/4 justify-center items-center">
                    {/* <Text className="text-base pt-1 text-white font-semibold">Animal Cadastrado</Text> */}
                </View>
            
            

            </View>
        </View>
        <View className="bg-bioBrancoPrincipal flex-1">
        <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
            >
            <ScrollView className="">
              <View className="items-center pt-3">
                <TouchableOpacity className="w-11/12 h-64 border-2 border-bioVerde rounded-lg border-dashed items-center justify-center mb-2">
                
                    {loadingimg && <FadeLoading primaryColor="gray" secondaryColor="lightgray" className="flex-1 w-11/12 h-60 absolute" />}
                  <Image className="w-11/12 h-60 rounded-lg" source={{ uri: `${global.apiUrl}/storage/${animal.imagem[0]?.caminho}` }} cachePolicy="memory-disk"
                     onLoadEnd={() => setLoadingimg(false)} />
                  
                  {/* <View className="h-36 w-44 flex-col">
                    
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
                     
                  </View> */}

                  {/* } */}
                  
                
                </TouchableOpacity>
                <View className="bg-white w-full">
                  <View className="w-full h-24 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/2 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Título</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-1/2 justify-center">
                          <TextInput  selectionColor={'green'} value={animal.titulo} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Animal encontrado...'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-32 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/3 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Descrição</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-2/3 justify-center">
                          <TextInput  selectionColor={'green'} value={animal.descricao} editable multiline numberOfLines={3} maxLength={150} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Digite sua descrição aqui'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-24 items-center">
                      <View className="w-11/12 h-full flex-col">
                        <View className="w-full h-1/2 justify-center">
                          <Text className="font-normal text-lg text-bioTextoCinzaEscuro">Animal</Text>
                        </View>
                        <View className="border rounded-xl border-bioCinza w-full h-1/2 justify-center">
                          <TextInput  selectionColor={'green'} value={animal.animal} className="flex-1 px-4 text-bioTextoCinzaEscuro text-base" placeholder='Nome do animal'></TextInput>
                        </View>
                        
                      </View>
                  </View>
                  <View className="w-full h-24 items-center">
                    
                  </View>

                </View>
              </View>
              
            </ScrollView>
            
        </KeyboardAvoidingView>
    </View>
    </SafeAreaView>
  )
}

export default ShowAnimal