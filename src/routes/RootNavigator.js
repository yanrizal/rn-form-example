import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { Colors, SF } from '../utils';
import { TouchableOpacity, View, Text } from 'react-native';
import home from '../screens/home';
import login from '../screens/login';

const RootNavigator = props => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={login} />
        <Stack.Screen name='Home' component={home} options={{
          title: "Home", headerShown: true
          }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;