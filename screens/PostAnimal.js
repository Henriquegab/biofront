import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const AdScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      {/* <View className="flex-row items-center justify-between p-4">
          <TouchableOpacity>
            <Text className="text-white">Voltar</Text>
          </TouchableOpacity>
          <Text className="text-white">LIMPAR</Text>
        </View> */}
      <KeyboardAwareScrollView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
        <ScrollView className="overflow-visible">
          <View className="items-center justify-center h-3/5">
            <TouchableOpacity className="bg-bioVerde rounded-lg p-4">
              <Text className="text-white font-bold">Incluir fotos</Text>
            </TouchableOpacity>
            <Text className="text-gray-400 mt-2">0 de 20 adicionadas</Text>
          </View>

          <View className="bg-bioBrancoPrincipal rounded-t-3xl px-4 py-6">
            <Text className="font-bold text-gray-800">Título do anúncio*</Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
              placeholder="Ex: Samsung S9 novo na caixa"
            />

            <Text className="font-bold text-gray-800 mt-4">Descrição*</Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2 h-24"
              multiline
              placeholder="Ex: Smartphone Samsung Galaxy S9 com 128gb de memória, com caixa, todos os cabos e sem marca de uso."
            />

            <Text className="font-bold text-gray-800 mt-4">Marca*</Text>
            <TextInput
              className="border border-gray-300 rounded-lg px-4 py-2 mt-2"
              placeholder="Ex: Samsung"
            />

            <TouchableOpacity className="bg-bioVerde rounded-lg p-4 mt-6">
              <Text className="text-white font-bold">Anunciar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AdScreen;
