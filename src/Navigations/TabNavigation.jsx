import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

/** Importação das telas */
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY,
      }}>

        {/** options vai mudar o texto do botão - o Label serve pra mudar o rótulo */}
        <Tab.Screen name='home' component={HomeScreen}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color: color, fontSize: 12, marginTop: -7}}> Home </Text>
          ),
          tabBarIcon:({color, size})=>(
            <FontAwesome5 name="home" size={size} color={color} />
          )
        }}/>

        <Tab.Screen name="booking" component={BookingScreen}
         options={{
          tabBarLabel:({color})=>(
            <Text style={{color: color, fontSize: 12, marginTop: -7}}> Booking </Text>
          ),
          tabBarIcon:({color, size})=>(
            <FontAwesome name="bookmark" size={size} color={color} />
          )
        }}/>

        <Tab.Screen name="profile" component={ProfileScreen}
         options={{
          tabBarLabel:({color})=>(
            <Text style={{color: color, fontSize: 12, marginTop: -7}}> Profile </Text>
          ),
          tabBarIcon:({color, size})=>(
            <FontAwesome name="user-circle" size={size} color={color} />
          )
        }}/>
    </Tab.Navigator>
  );
}


