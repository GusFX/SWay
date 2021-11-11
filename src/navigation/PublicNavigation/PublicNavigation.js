import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import {Home} from '../../screens';

const Stack = createStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
