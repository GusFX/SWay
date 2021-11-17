import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation';
import {Provider as PaperProvider} from 'react-native-paper';

export default function Index() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
