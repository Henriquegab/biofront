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

const Stack= createNativeStackNavigator();

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
    {isLoading ? <SplashScreen /> : <Stack.Navigator 
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Home" component={LoginScreen} />
        
      </Stack.Navigator>}
      
    </NavigationContainer>
  );
}

