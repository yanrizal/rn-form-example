/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Alert,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NativeBaseProvider, Button, Input } from "native-base";
import axios from 'axios';
// import FormExample from './src/screens/form';

const LoginPage = (props) => {
  const { navigation } = props;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (text) => {
    setEmail(text)
  }

  const handleChangePassword = (text) => {
    setPassword(text)
  }

  const handleSubmit = async () => {
    let valid = true
    if (email === '') {
        Alert.alert('Error', 'email required')
        valid = false
    }
    if (password === '') {
        Alert.alert('Error', 'password required')
        valid = false
    }
    if (valid) {
        // if valid submit to api using axios
        try {
            const API_URL_SERVER = `http://emshotels.net/myapi/login.php?email=${email}&password=${password}`
            const res = await axios.post(API_URL_SERVER)
            console.log(res)
            if (res.data.message === 'Error') {
              Alert.alert('Error', 'Email atau password salah')
            }
            if (res.data.message === 'Success') {
              Alert.alert('Success')
              navigation.replace('Home')
            }
        } catch(err) {
            console.log(err)
            Alert.alert('Error', err)
        }
    }
  }

  return (
    <>
      <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            padding:20
          }}>
           
            <View style={{width:200, justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
            
        <Input shadow={2} _light={{
          bg: "coolGray.100",
          _hover: {
            bg: "coolGray.200"
          },
          _focus: {
            bg: "coolGray.200:alpha.70"
          }
        }} _dark={{
          bg: "coolGray.800",
          _hover: {
            bg: "coolGray.900"
          },
          _focus: {
            bg: "coolGray.900:alpha.70"
          }
        }} 
        autoCapitalize='none'
        value={email}
        onChangeText={handleChangeEmail}
        placeholder="Email" />

        <Input shadow={2} _light={{
          bg: "coolGray.100",
          _hover: {
            bg: "coolGray.200"
          },
          _focus: {
            bg: "coolGray.200:alpha.70"
          }
        }} _dark={{
          bg: "coolGray.800",
          _hover: {
            bg: "coolGray.900"
          },
          _focus: {
            bg: "coolGray.900:alpha.70"
          }
        }} type="password" 
        value={password}
        onChangeText={handleChangePassword}
        placeholder="Password" />

          <Button shadow={2} onPress={handleSubmit} style={{marginTop:20}}>
              Submit
            </Button>
        </View>
        </View>
    </>
  );
}



export default LoginPage;
