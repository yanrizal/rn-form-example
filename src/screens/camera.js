import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  Linking,
  Image,
  SafeAreaView
} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

function CameraScreen({navigation, route}) {
    const camera = useRef(null)

    useEffect(() => {
        async function getPermission() {
        const newCameraPermission = await Camera.requestCameraPermission();
        console.log(newCameraPermission);
        }
        getPermission();
    }, []);


    const device = useCameraDevice('back')

    const capturePhoto = async () => {
        const file = await camera.current.takePhoto()
        const result = await fetch(`file://${file.path}`)
        const data = await result.blob();
        console.log('photo',data._data)
        navigation.goBack();
        route.params.onCapture({ data: data._data, file: file });
    }

    console.log('dev',device)
    if (device == null) return <Text>Camera not available</Text>;

    return (
        <>
        <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        ref={camera}
        isActive={true}
        photo={true}
        />
        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.camButton}
            onPress={() => capturePhoto()}
        />
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'gray',
    },
    buttonContainer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      bottom: 0,
      padding: 20,
    },
    camButton: {
      height: 80,
      width: 80,
      borderRadius: 40,
      backgroundColor: 'white',
      alignSelf: 'center',
    },
    image: {
      width: '100%',
      height: 'auto',
      aspectRatio: 9 / 16,
    },
  });

export default CameraScreen;