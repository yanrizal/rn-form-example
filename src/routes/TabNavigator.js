import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AddIcon, Avatar, HamburgerIcon, Menu, Text } from 'native-base'
import Home from '../screens/home';
import AddForm from '../screens/addForm';
import Profile from '../screens/profil';
import Outbox from '../screens/outbox';

const Tab = createBottomTabNavigator();

function MyTabs(props) {
  const navigation = useNavigation();
  console.log('pro',props)
  return (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Add"
        children={()=><AddForm route={props.route.params.params}/>}
        options={{
          title: "Add", 
          headerShown: true,
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#01a659',
          headerStyle: {
            backgroundColor: '#01a659',
          },
          tabBarLabel: 'ADD',
          tabBarLabelStyle: {
            display:'none'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <AddIcon size="5" mt="0.5" color="emerald.500" />
          )
          }}/>
      <Tab.Screen name="Home"
          children={()=><Home route={props.route.params.params}/>}
          options={{
          title: "EMS", 
          headerShown: true,
          headerTintColor: '#01a659',
          tabBarActiveTintColor: '#01a659',
          headerStyle: {
            backgroundColor: '#fff'
          },
          headerRight: () => (
            <Menu w="190" onClose={(e) => console.log(e)} trigger={triggerProps => {
              return <Pressable style={{marginRight:20}} accessibilityLabel="More options menu" {...triggerProps}>
                      <HamburgerIcon />
                    </Pressable>;
            }}>
                <Menu.Item>SETTING</Menu.Item>
                <Menu.Item  onPress={() => navigation.navigate('Hometab', {
                screen: 'Profile',
                params: props.route.params.params
              })}>
                    <Pressable onPress={() => navigation.navigate('Hometab', {
                screen: 'Profile',
                params: props.route.params.params
              })}><Text>PROFILE</Text></Pressable>
                </Menu.Item>
                <Menu.Item>LOG OUT</Menu.Item>
              </Menu>
          ),
          tabBarLabel: 'IN',
          tabBarLabelStyle: {
            fontSize:23,
            marginBottom:10
          },
          tabBarIconStyle: { display: "none" },
          }}/>
      <Tab.Screen name="Outbox"
          children={()=><Outbox route={props.route.params.params}/>}
          options={{
          title: "EMS", 
          headerShown: true,
          headerTintColor: '#01a659',
          tabBarActiveTintColor: '#01a659',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => (
            <Menu w="190" onClose={(e) => console.log(e)} trigger={triggerProps => {
              return <Pressable style={{marginRight:20}} accessibilityLabel="More options menu" {...triggerProps}>
                      <HamburgerIcon />
                    </Pressable>;
            }}>
                <Menu.Item>SETTING</Menu.Item>
                <Menu.Item  onPress={() => navigation.navigate('Hometab', {
                screen: 'Profile',
                params: props.route.params.params
              })}>
                    <Pressable onPress={() => navigation.navigate('Hometab', {
                screen: 'Profile',
                params: props.route.params.params
              })}><Text>PROFILE</Text></Pressable>
                </Menu.Item>
                <Menu.Item>LOG OUT</Menu.Item>
              </Menu>
          ),
          tabBarLabel: 'OUT',
          tabBarLabelStyle: {
            fontSize:23,
            marginBottom:10
          },
          tabBarIconStyle: { display: "none" },
          }}/>
        <Tab.Screen name="Profile" 
        children={()=><Profile route={props.route.params.params}/>}
        options={{
          title: "Profile", 
          headerShown: true,
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#01a659',
          headerStyle: {
            backgroundColor: '#01a659',
          },
          tabBarLabel: 'PROFILE',
          tabBarLabelStyle: {
            display:'none'
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Avatar size="35" source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }} />
          )
          }}/>
    </Tab.Navigator>
  );
}

export default MyTabs