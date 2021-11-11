import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation';

export default function Index() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
