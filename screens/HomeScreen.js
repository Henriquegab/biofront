import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-zinc-900">
      <ScrollView className="pt-10">
        <ProfileInfo />
        <PlaylistSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileInfo = () => (
  <View className="items-center mb-6">
    <Image
      source={{ uri: 'https://instagram.fmoc2-1.fna.fbcdn.net/v/t51.2885-19/362384237_791464489192342_4511360389073602271_n.jpg?_nc_ht=instagram.fmoc2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=mq8yXUk2R_YQ7kNvgHyKfu6&edm=AEhyXUkBAAAA&ccb=7-5&oh=00_AYDUYh3P9PDoMfZaYrdq7P2Kf88rJ1qsonznodmIr6Bapw&oe=66C91DE0&_nc_sid=8f1549' }}
      className="w-24 h-24 rounded-full mb-2"
    />
    <Text className="text-white text-xl font-semibold">henrique</Text>
    <Text className="text-gray-400 text-sm">0 cadastros • 34 publicados</Text>
    <TouchableOpacity className="mt-2 px-4 py-2 bg-zinc-800 rounded-full">
      <Text className="text-white">Editar</Text>
    </TouchableOpacity>
  </View>
);

const PlaylistSection = () => {
  const navigation = useNavigation();

 

  return (
    <View className="px-4">
      <Text className="text-white text-xl font-semibold mb-4">Gerenciamento de conta</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Mudar senha');}} className="flex-row items-center mb-4">
        <View className="mr-2 ml-1">
          <Ionicons name="key" size={32} color="white" />
        </View>
        <View>
          <Text className="text-white font-semibold">Mudar a senha</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center mb-4">
        <View className="mr-2 ml-1">
          <MaterialCommunityIcons name="cloud-upload-outline" size={32} color="white" />
        </View>
        <View>
          <Text className="text-white font-semibold">Sincronizar dados salvos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center mb-4">
        <View className="mr-2 ml-1">
          <MaterialCommunityIcons name="logout" size={32} color="red" />
        </View>
        <View>
          <Text className="text-red-600 font-semibold">Sair</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
