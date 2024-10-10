import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadImageOnly } from '../utils/imageUtils';
import LoadingComponent from '../components/LoadingComponent';




const ProfileScreen = () => {

  

  

  return (
    <SafeAreaView className="flex-1 bg-bioBrancoPrincipal">
      {/* <Header /> */}
      {/* <View className=""> */}
        
        <ProfileInfo />
        <PlaylistSection />
      {/* </View> */}
    </SafeAreaView>
  );
};



const ProfileInfo = () => {
  
  const navigation = useNavigation();
  const fileName = 'user_profile.jpg';
  const [profilePicture, setProfilePicture] = useState(null);
  // const [imageNotSave, setImageNotSave] = useState(null);
  const [username, setUsername] = useState('user');

  useFocusEffect(
    useCallback(() => {
      const fetchUsername = async () => {
        const value = await AsyncStorage.getItem('username');
        setProfilePicture(null)
        
        if (value) setUsername(value);
      };
      fetchUsername();

      
      loadImageOnly(fileName, setProfilePicture);
      
    }, [])
  );




  return(
  <View className="items-center mb-6 bg-bioVerde">
    <View style={styles.box}>
      <Image
        source={{ uri: profilePicture }}
        className="w-24 h-24 rounded-full mb-2"
        
      />
    </View>
    
    <Text className="text-white text-xl font-semibold">{username}</Text>
    <Text className="text-gray-400 text-sm">0 cadastros • 34 publicados</Text>
    <TouchableOpacity onPress={() => {navigation.navigate('Editar perfil')}} className="my-2 px-4 py-2 bg-zinc-800 rounded-full">
      <Text className="text-white">Editar</Text>
    </TouchableOpacity>
  </View>
)
};

const PlaylistSection = () => {

const [loading, setLoading] = useState(false)

  const navigation = useNavigation();

  const handleLogout = async () => {

    setLoading(true);
    const token = await AsyncStorage.getItem('token');

    // const navigation = useNavigation();
   

    try {

      

      const res = await axios.get(global.apiUrl + '/api/user/logout', {headers: {'Authorization': `Bearer ${token}`}}).then(function (res_api) {

        
        
        
        AsyncStorage.clear();

        navigation.replace('Auth')


      }).catch(function (error) {

        Toast.show(error.response.data.message, {
          position: 70
        })

      });

    } catch (error) {
      setLoading(false);
      console.error('Erro ao fazer a requisição GET:', error);
    }

    setLoading(false);
  }

  

  if (loading) {
    // Exibe um indicador de carregamento enquanto espera a resposta da API
    return (
      <LoadingComponent />
    );
  }

    
  

  return (
    <View style={styles.box} className="p-4  rounded-xl bg-white mx-4">
      <Text className="text-bioTextoCinzaEscuro text-xl font-semibold mb-4">Gerenciamento de conta</Text>
      <TouchableOpacity onPress={() => {navigation.navigate('Mudar senha')}} className="flex-row items-center mb-4">
        <View className="mr-2">
          <Ionicons name="key" size={28} color="#333333" />
        </View>
        <View>
          <Text className="text-bioTextoCinzaEscuro font-semibold">Mudar a senha</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center mb-4">
        <View className="mr-2">
          <MaterialCommunityIcons name="cloud-upload-outline" size={28} color="#333333" />
        </View>
        <View>
          <Text className="text-bioTextoCinzaEscuro font-semibold">Sincronizar dados salvos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} className="flex-row items-center mb-4">
        <View className="mr-2">
          <MaterialCommunityIcons name="logout" size={28} color="#607f60" />
        </View>
        <View>
          <Text className="text-bioVerde font-semibold">Sair</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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

export default ProfileScreen;
