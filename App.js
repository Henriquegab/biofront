import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
// import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
// SplashScreen.preventAutoHideAsync();
import { useState,useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPassword from './screens/ForgotPassword';
import MainMenu from './screens/MainMenu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Stack= createNativeStackNavigator();

function shouldShowHeader(route) {
  // Verifica se a rota atual é diferente das telas de login, registro e esqueci minha senha
  return route.name !== 'Login' && route.name !== 'Register' && route.name !== 'ForgotPassword';
}

export default function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);
  
    
  

  


  return (
    <NavigationContainer>
    {isLoading ? <SplashScreen /> : <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: '#ff5f01' }, // Defina a cor de fundo da barra de navegação
        headerStyle: { backgroundColor: '#ff5f01' }, // Defina a cor de fundo do cabeçalho
        headerTitleStyle: { color: 'white' },
        tabBarShowLabel: false,
        headerShown: shouldShowHeader(route),
      })}
    >



        <Tab.Screen name="Login" component={LoginScreen} options={{
                tabBarButton: () => null, // Isso faz com que a tela seja invisível no tab bar
              }}/>
        <Tab.Screen name="Register" component={RegisterScreen} options={{
                tabBarButton: () => null, // Isso faz com que a tela seja invisível no tab bar
              }}/>
        <Tab.Screen name="ForgotPassword" component={ForgotPassword} options={{
                tabBarButton: () => null, // Isso faz com que a tela seja invisível no tab bar
              }} />
        <Tab.Screen name="Menu" component={MainMenu} />
        
      </Tab.Navigator>}
      
    </NavigationContainer>
  );
}

