import { View, Text, SafeAreaView, SafeAreaViewBase, ScrollView, TouchableOpacity, RefreshControl, FlatList } from 'react-native'
import MenuButton from '../components/MenuButton'
import React, { useCallback, useEffect, useState } from 'react'
import ComponentTest from '../components/ComponentTest'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Toast from 'react-native-root-toast'
import { useFocusEffect } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';

const MainMenu = ({ navigation }) => {
  const route = useRoute(); // Obter o objeto `route`
  const [listKey, setListKey] = useState(0); // Estado para forçar a remontagem
  const [refreshing, setRefreshing] = useState(false);
  const [animals, setAnimals] = useState([]);
  

  const fetchAnimals = async () => {
    try {

      const token = await AsyncStorage.getItem('token');

      const response = await axios.get(global.apiUrl+'/api/animal', {headers: {'Authorization': `Bearer ${token}`}}).then(function (res_api) {

      setAnimals(res_api.data.data); // Acessa a propriedade "data" no JSON
      
      // console.log(res_api.data.data[1])
      
        


      }).catch(function (error) {

        Toast.show(error.response.data.message, {
          position: 70
        })

      });
      
    } catch (error) {
      console.log(error);
    }
  };
  
  

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchAnimals();
    setListKey(prevKey => prevKey + 1); // Atualiza a chave para forçar a remontagem
    setRefreshing(false);
  }, []);

  const pressAnimal = (item) =>{
    // console.log(item)
    navigation.navigate('ShowAnimal', { animal: item })
  }
  const [hasVisited, setHasVisited] = useState(false);
  useFocusEffect(
    useCallback(() => {
      if (!hasVisited) {
        onRefresh(); // Executa o onRefresh somente na primeira vez
        setHasVisited(true); // Define que já foi visitado
      }
    }, [hasVisited, onRefresh])
  );


  const renderAnimal = ({ item }) => (
    
    <MenuButton press={() => pressAnimal(item)} title={item.titulo} animal={item.animal} autor={item.created_at} image={{ uri: `${global.apiUrl}/storage/${item.imagem[0]?.caminho}` }}></MenuButton>
  );

  

  


  return (
    <>
    
        <SafeAreaView className="flex-1 bg-bioBrancoPrincipal">
            
          <SearchBar></SearchBar>
          
          <FlatList
            key={listKey} // Define a chave que muda a cada atualização
            data={animals}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderAnimal}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}
            

            />}
          />
           
          {/* <Pagination></Pagination> */}
        </SafeAreaView>
    </>
  )
}

export default MainMenu