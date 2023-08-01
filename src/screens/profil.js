/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useCallback } from 'react';
import {
  useColorScheme,
  Alert,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { Center, Box, Button, Input, Heading, VStack, FormControl, HStack, Link, Image, Text } from "native-base";
import axios from 'axios';
import avatarIcon from '../assets/images/avatar_default.jpg'

const Profile = ({route}) => {
  const {id, dept, email} = route
  const isDarkMode = useColorScheme() === 'dark'; 
  const [data,setData] = useState({});

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const loadData = async () => {
    try {
      const API_URL_SERVER = `https://emshotels.net/myapi/readprofile.php?id=${id}&email=${email}`
      const res = await axios.get(API_URL_SERVER)
      console.log('res',res)
      setData(res.data[0])
    } catch(err) {
        console.log(err)
        Alert.alert('Error', err)
    }
  }

  useFocusEffect(
    useCallback(() => {
      console.log('focus')
      loadData()
    }, [route])
  );



  const handleSubmit = async () => {
    let valid = true
  
   
    if (valid) {
        // if valid submit to api using axios
   
    }
  }

  return (
    <Box flex="1" bg="gray.500">

    <Center w="100%">
    <Box safeArea p="2" pt="10" py="8" w="90%" maxW="290">
        {}
        <Image size={20} alt="fallback text" borderRadius={100} source={avatarIcon} />
        <VStack space={3} mt="6" >
 
        <Text color="muted.50" fontSize="xl">
                          Company: {data.propName}
                        </Text>


                        <Text color="muted.50" fontSize="xl">
                          Name: {data.nama}
                        </Text>
                        <Text  color="muted.50" fontSize="xl">
                          Email: {data.email}
                        </Text>
                        <Text  color="muted.50" fontSize="xl">
                          Mobile: {data.Telp}
                        </Text>

     
          <Button mt="2" onPress={handleSubmit} >
          
            Edit
          </Button>

      
        </VStack>
      </Box>
    </Center>
    </Box>
  );
}



export default Profile;