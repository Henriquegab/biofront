// imageUtils.js
import * as FileSystem from 'expo-file-system';

export const getAssetPath = (fileName) => {
  return `${FileSystem.documentDirectory}${fileName}`;
};

export const loadImage = async (fileName, setImageUri, setImageNotSave) => {
  try {
    setImageNotSave(null);
    const assetPath = getAssetPath(fileName);
    const fileInfo = await FileSystem.getInfoAsync(assetPath);
    if (fileInfo.exists) {
      setImageUri(assetPath);
    }
  } catch (error) {
    console.error('Erro ao carregar a imagem:', error);
  }
};

export const loadImageOnly = async (fileName, setImageUri) => {
  try {
    
    const assetPath = getAssetPath(fileName);
    const fileInfo = await FileSystem.getInfoAsync(assetPath);
    if (fileInfo.exists) {
      setImageUri(assetPath);
    }
  } catch (error) {
    console.error('Erro ao carregar a imagem:', error);
  }
};

export const saveImage = async (imageUri, fileName) => {
  try {
    const assetPath = getAssetPath(fileName);
    const fileInfo = await FileSystem.getInfoAsync(assetPath);
    if (fileInfo.exists) {
      await FileSystem.deleteAsync(assetPath);
    }

    await FileSystem.copyAsync({
      from: imageUri,
      to: assetPath,
    });

    return `${assetPath}?${new Date().getTime()}`;
  } catch (error) {
    throw new Error('Erro ao salvar a imagem: ' + error.message);
  }
};
