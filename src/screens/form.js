/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Alert,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Button, Input } from "native-base";
import axios from 'axios';

const FormExample = () => {
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
            const payload = {
                email,
                password
            }
            const API_URL_SERVER = 'http://localhost:3000/api' //contoh
            const res = await axios.post(API_URL_SERVER, payload)
            console.log(res)
        } catch(err) {
            console.log(err)
            Alert.alert('Error', err)
        }
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        
        
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
      </ScrollView>
    </SafeAreaView>
  );
}



export default FormExample;
