/* eslint-disable react/no-unstable-nested-components */
import 'react-native-gesture-handler';
import React from 'react';
import {LogBox, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import Explore from './screens/Explore';

LogBox.ignoreAllLogs();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>\
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Explore') {
                iconName = 'compass-outline';
              } else if (route.name === 'Live Events') {
                iconName = 'ticket-outline';
              } else if (route.name === 'Saved') {
                iconName = 'heart-outline';
              } else if (route.name === 'Profile') {
                iconName = 'person-outline';
              }
              return (
                // <View style={{ alignItems: 'center',justifyContent:'space-between',width:'100%' }}>
                //   {focused && <View style={{ width: '100%', height: 2, backgroundColor: '#0A1F66' }} />}
                  <Icon name={iconName} size={size} color={color} />
                // </View>
              );
            },
            tabBarActiveTintColor: '#0A1F66',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {backgroundColor: 'white', height: 60},
            tabBarLabelStyle: {fontSize: 10},
            tabBarItemStyle: {justifyContent:'space-between',alignItems:'center'},
            animation:'none',

          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Live Events" component={Home} />
          <Tab.Screen name="Saved" component={Home} />
          <Tab.Screen name="Profile" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
