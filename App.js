import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import MainMenu from './screens/MainMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import PostAnimal from './screens/PostAnimal';
import { RootSiblingParent } from 'react-native-root-siblings';
import "./conection";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import ChangePassword from './screens/ChangePassword';
import EditProfile from './screens/EditProfile';


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

function MainTabs() {
  return (
    
      <RootSiblingParent>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: { backgroundColor: '#18181b', borderTopWidth: 0  },
            headerStyle: { backgroundColor: '#18181b' },
            headerTitleStyle: { color: 'white' },
            tabBarShowLabel: true,
            headerShown: false,
            tabBarActiveTintColor: '#1DB954',
            animation: "shift"

          }}
        >
          <Tab.Screen
            name="Menu"
            component={MainMenu}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={focused ? styles.focusedIcon : styles.icon}>
                  <Icon name="home" color={focused ? "#1DB954" : "white"} size={24} />
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
                  <Icon name="pencil" color={focused ? "#1DB954" : "white"} size={24} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={focused ? styles.focusedIcon : styles.icon}>
                  <Icon name="user" color={focused ? "#1DB954" : "white"} size={24} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Mudar senha"
            component={ChangePassword}
            options={{
              tabBarVisible: false,
              tabBarButton: () => null
            }}
          />
          <Tab.Screen
            name="Editar perfil"
            component={EditProfile}
            presentation="modal"
            animation="slide_from_bottom"
            options={{
              tabBarVisible: false,
              tabBarButton: () => null
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
