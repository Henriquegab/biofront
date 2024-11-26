import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import MainMenu from './screens/MainMenu';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconOutline from 'react-native-vector-icons/FontAwesome6';
import PostAnimal from './screens/PostAnimal';
import { RootSiblingParent } from 'react-native-root-siblings';
import "./conection";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import ChangePassword from './screens/ChangePassword';
import EditProfile from './screens/EditProfile';
import ShowAnimal from './screens/ShowAnimal';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    
      <RootSiblingParent>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        </Stack.Navigator>
      </RootSiblingParent>
    
  );
}

const BackButton = ({onPress})=> <TouchableOpacity style={{alignItems:"center",flexDirection:"row",justifyContent:"center"}}>
<Ionicons name="chevron-back" size={24} color="black" />
 <Text onPress={onPress}> Back </Text>
 </TouchableOpacity>

 

function MainTabs() {

  
  return (
    
      <RootSiblingParent>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: '#f4f7f2', borderTopWidth: 0  },
            headerStyle: { backgroundColor: '#607f60' },
            headerTitleStyle: { color: 'white' },
            tabBarShowLabel: true,
            headerTintColor: "#ffffff",
            headerShown: true,
            tabBarActiveTintColor: '#607f60',
            tabBarLabelStyle: {
              fontWeight: '400'
            },
           
            animation: "shift"

          }}
        >
          <Tab.Screen
            name="Menu"
            component={MainMenu}
            options={{
              tabBarLabelStyle: ({ focused }) => {
                fontWeight: focused ? "900" : "400"
            },
              tabBarIcon: ({ focused }) => (
                <View style={focused ? styles.focusedIcon : styles.icon}>
                  <Ionicons
                    name={focused ? "home" : "home-outline"} // "home-outline" para contorno e "home" para preenchido
                    color={focused ? "#607f60" : "#333333"}
                    size={20}
                  />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Cadastro de animal"
            component={PostAnimal}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={focused ? styles.focusedIcon : styles.icon}>
                  <Ionicons
                    name={focused ? "clipboard" : "clipboard-outline"} // "home-outline" para contorno e "home" para preenchido
                    color={focused ? "#607f60" : "#333333"}
                    size={20}
                  />
                </View>
              ),
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={focused ? styles.focusedIcon : styles.icon}>
                  <Ionicons
                    name={focused ? "people" : "people-outline"} // "home-outline" para contorno e "home" para preenchido
                    color={focused ? "#607f60" : "#333333"}
                    size={20}
                  />
                </View>
              ),
              headerShadowVisible: false, // applied here
            }}
          />
          <Tab.Screen
            name="Mudar senha"
            component={ChangePassword}
            options={{
              tabBarVisible: false,
              tabBarButton: () => null,
              headerShown: false
            }}
          />
          <Tab.Screen
            name="ShowAnimal"
            component={ShowAnimal}
            options={{
              tabBarVisible: true,
              tabBarButton: () => null,
              headerShown: false
            }}
          />
          <Tab.Screen
            name="Editar perfil"
            component={EditProfile}
            presentation="modal"
            animation="slide_from_bottom"
            options={{
              tabBarVisible: false,
              tabBarButton: () => null,
              headerShown: false
            }}
            
          />
          {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
          {/* Adicione outras telas aqui */}
        </Tab.Navigator>
      </RootSiblingParent>
    
  );
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'black',
    // backgroundColor: 'white',
    borderRadius: 12,
    width: 32,
    height: 32,
    
  },
});

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      
        const token = await AsyncStorage.getItem('token');
        

        if (!token) {
          setIsLoading(false);
          return;
        }

        const credentials = {
          headers: {
            Authorization: `Bearer ${token}`, // Supondo que o token seja usado no header de autenticação
          }
        };

        const res = await axios.get(global.apiUrl + '/api/user/me', credentials).then(function (res_api) {
        
          // console.log(res_api.data)
          if (res_api.data.success == true) {
            // console.log(1)
            setIsAuthenticated(true);
          }


        }).catch(function (error) {

        }).finally(function(){
          setIsLoading(false)

        })
      }

    fetchData();
  }, []);

  const handleLogin = () => {
    // Aqui você colocaria sua lógica de autenticação
    setIsAuthenticated(true);
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {/* {isAuthenticated ? (
        <MainTabs />
      ) : ( */}
        <Stack.Navigator>
          <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      {/* )} */}
    </NavigationContainer>
  );
}
