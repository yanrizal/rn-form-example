import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddIcon, Avatar, HamburgerIcon } from 'native-base'
import home from '../screens/home';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Add" component={home} options={{
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
      <Tab.Screen name="Home" component={home} 
          options={{
          title: "EMS", 
          headerShown: true,
          headerTintColor: '#01a659',
          tabBarActiveTintColor: '#01a659',
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerRight: () => (
            <HamburgerIcon size="5" mt="0.5" color="#999" style={{marginRight:20}} />
          ),
          tabBarLabel: 'IN',
          tabBarLabelStyle: {
            fontSize:23,
            marginBottom:10
          },
          tabBarIconStyle: { display: "none" },
          }}/>
      <Tab.Screen name="Settings" component={home} 
      options={{
        title: "OUT", 
        headerShown: true,
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#01a659',
        headerStyle: {
          backgroundColor: '#01a659',
        },
        tabBarLabel: 'OUT',
        tabBarLabelStyle: {
          fontSize:23,
          marginBottom:10
        },
        tabBarIconStyle: { display: "none" },
        }}/>
        <Tab.Screen name="Profile" component={home} options={{
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