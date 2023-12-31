/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { VStack, FormControl, Input, Box, Select, Button, Center, CheckIcon, TextArea, Image } from 'native-base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const WoFilter = ({route}) => {
  const navigation = useNavigation();
  const {id, dept} = route
  const [dataTo, setDataTo] = useState([])
  const [dataLocation, setDataLocation] = useState([])
  const [dataCategory, setDataCategory] = useState([])
  const dataPriority = ["low","medium","high"]
  const dataStatus = ["new","receive","progress","pending","done"]
  const [loading, setLoading] = useState([])
  const [woto, setWoto] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  

  const loadData = async () => {
    try {
      const API_URL_DATA_TO = `https://emshotels.net/myapi/woto.php?id=${id}`
      const API_URL_DATA_LOCATION = `https://emshotels.net/myapi/getlocation.php?id=${id}`
      const API_URL_DATA_CATEGORY = `https://emshotels.net/myapi/getcategory.php?id=${id}`
      const res = await axios.get(API_URL_DATA_TO)
      const res2 = await axios.get(API_URL_DATA_LOCATION)
      const res3 = await axios.get(API_URL_DATA_CATEGORY)
      console.log('res',res2, res3)
      setDataTo(res.data)
      setDataLocation(res2.data)
      setDataCategory(res3.data)
      setLoading(false)
    } catch(err) {
        console.log(err)
        Alert.alert('Error', err.message)
    }
  }

  useEffect(() => {
    loadData()
  },[])

  const handleReset = () => {
    setLocation("")
    setCategory("")
    setPriority("")
    setStatus("")
    setMessage("")
    // navigation.navigate('Hometab', {
    //   screen: 'Home',
    //   params: { id, dept, filter: false, filterData:{} }
    // });
  }



  const handleSubmit = async () => {
    // const data = new FormData() 
    // data.append('location', location)
  
    // data.append('category', category)
    // data.append('priority', priority)
    // data.append('status', status)
    // data.append('job', message)
   
    // data.append('id', id)
    // data.append('dept', dept)
    const response = await axios.post(`https://emshotels.net/myapi/woFilter.php`, null,  { params: {
      location,
      category,
      priority,
      status,
      job:message,
      id,
      dept
    }})

    console.log('resp', response)

    if (response.status === 200) {
      navigation.navigate('Hometab', {
        screen: 'Home',
        params: { id, dept, filter: true, filterData:response.data }
      });
      // Alert.alert('Success', 'success', [
      //   {text: 'OK', onPress: () => {
      //     navigation.navigate('Hometab', {
      //       screen: 'Home',
      //       params: { id: id, dept: dept }
      //     });
      //   }},
      // ]);
      
    } else {
      alert(response.status)
    }
  }
    
  return (
    <Box bg="muted.50" flex="1">
        <Center w="100%">
            <Box safeArea p="2" pt="20" py="8" w="90%" maxW="290">
                <VStack space={3} mt="6">
                <Button mt="2" onPress={handleReset}>
                    RESET
                </Button>
          
                <FormControl isReadOnly>
                <Select shadow={2} selectedValue={location} color="black" minWidth="200" accessibilityLabel="Location" placeholder="Location" _selectedItem={{
                  bg: "muted.500",
                  endIcon: <CheckIcon size="5" />
                }} onValueChange={itemValue => setLocation(itemValue)}>
                    {dataLocation.map((item,index) => (
                    <Select.Item key={index} shadow={2} label={item.lokasi} value={item.lokasi} />
                  ))}
                  </Select>
                </FormControl>
                <FormControl isReadOnly>
                <Select shadow={2} selectedValue={category} color="black" minWidth="200" accessibilityLabel="Category" placeholder="Category" _selectedItem={{
                  bg: "muted.500",
                  endIcon: <CheckIcon size="5" />
                }} onValueChange={itemValue => setCategory(itemValue)}>
                    {dataCategory.map((item,index) => (
                    <Select.Item key={index} shadow={2} label={item.category} value={item.category} />
                  ))}
                  </Select>
                </FormControl>
                
                <FormControl>
                <Input size="md" placeholder="job" color="black" value={message} onChangeText={(e) => setMessage(e)}/>
                </FormControl>

               


                <FormControl isReadOnly>
                <Select shadow={2} selectedValue={priority} color="black" minWidth="200" accessibilityLabel="Priority" placeholder="Priority" _selectedItem={{
                  bg: "muted.500",
                  endIcon: <CheckIcon size="5" />
                }} onValueChange={itemValue => setPriority(itemValue)}>
                    {dataPriority.map((item,index) => (
                    <Select.Item key={index} shadow={2} label={item} value={item} />
                  ))}
                  </Select>
                </FormControl>

                <FormControl isReadOnly>
                <Select shadow={2} selectedValue={status} color="black" minWidth="200" accessibilityLabel="status" placeholder="status" _selectedItem={{
                  bg: "muted.500",
                  endIcon: <CheckIcon size="5" />
                }} onValueChange={itemValue => setStatus(itemValue)}>
                    {dataStatus.map((item,index) => (
                    <Select.Item key={index} shadow={2} label={item} value={item} />
                  ))}
                  </Select>
                </FormControl>
            
                <Button mt="2" onPress={handleSubmit}>
                    FILTER
                </Button>
                </VStack>
            </Box>
            </Center>
    </Box>
  );
}



export default WoFilter;