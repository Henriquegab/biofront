import React from 'react'
import { View, Image, StyleSheet, Animated, Text } from 'react-native';

const SplashScreen = () => {


    const imageScale = new Animated.Value(0.1);
    Animated.timing(imageScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

  return (
    <View className="flex-1 justify-center items-center bg-bioPrincipal">
      <Animated.Image
        source={require('../assets/images/urso.png')}
        style={[styles.image, { transform: [{ scale: imageScale }] }]}
      />
    </View>
  )

  
}

const styles = StyleSheet.create({
    
    image: {
      width: 400,
      height: 400,
    },
  });

export default SplashScreen