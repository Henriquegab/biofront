// ImageSelector.js
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Entypo from '@expo/vector-icons/Entypo';

const ImageSelector = ({ imageNotSave, imageUri, setImageUri }) => {
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  

  return (
    <TouchableOpacity onPress={pickImage} className="h-36 w-36 justify-end items-center">
              {imageNotSave ? (
                <Image source={{ uri: imageNotSave }} className="w-36 h-36 rounded-full mb-2" />
              ) : (
                imageUri && <Image source={{ uri: imageUri }} className="w-36 h-36 rounded-full mb-2" />
              )}
              <View className="w-10 h-10 rounded-xl absolute self-end bg-bioBrancoPrincipal items-center justify-center">
                <Entypo name="pencil" size={24} color="black" />
              </View>
      </TouchableOpacity>
  );
};

export default ImageSelector;
