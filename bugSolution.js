// bugSolution.js
import * as Camera from 'expo-camera';
import { Alert } from 'react-native';

const takePicture = async () => {
  try {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      // Take a picture - add your picture taking logic here
      console.log('Picture taken successfully!');
    } else {
      Alert.alert('Camera permission not granted.');
    }
  } catch (error) {
    console.error('Error taking picture:', error);
    Alert.alert('Error taking picture. Please check permissions and try again.');
  }
};

export default takePicture;