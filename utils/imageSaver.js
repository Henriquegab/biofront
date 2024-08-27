// ImageSaver.js
import { saveImage } from './imageUtils';

const saveProfileImage = async (imageUri, fileName, setImageUri, navigation) => {
  try {
    const newImageUri = await saveImage(imageUri, fileName);
    setImageUri(newImageUri);
    navigation.navigate('Perfil');
  } catch (error) {
    console.error(error);
    // Tratar erro, exibir Toast, etc.
  }
};

export default saveProfileImage;