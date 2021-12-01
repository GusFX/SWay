import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Home, TravelHistory, UserRegistration} from '../../screens';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Histórico de Viagens" component={TravelHistory} />
  </Drawer.Navigator>
);

const PublicNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="UserRegistration">
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen
        name="UserRegistration"
        component={UserRegistration}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
