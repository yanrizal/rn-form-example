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
  Text
} from 'react-native';
import { VStack, Center, Icon, Box, Heading, Stack } from 'native-base';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
// import FormExample from './src/screens/form';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View >
        <VStack space="2.5" mt="4" px="8">
          <Heading size="md">Menu</Heading>
          <Stack direction="row" mb="2.5" mt="1.5" space={3}>
            <Center size="16" bg="primary.400" rounded="sm" _text={{
            color: 'warmGray.50',
            fontWeight: 'medium'
          }} shadow={'3'}>
              Box 1
            </Center>
            <Center bg="primary.500" size="16" rounded="sm" _text={{
            color: 'warmGray.50',
            fontWeight: 'medium'
          }} shadow={'3'}>
              Box 2
            </Center>
            <Center size="16" bg="primary.700" rounded="sm" _text={{
            color: 'warmGray.50',
            fontWeight: 'medium'
          }} shadow={'3'}>
              Box 3
            </Center>
          </Stack>
      </VStack>
    </View>
  );
}



export default Home;
