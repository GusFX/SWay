import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {Colors} from './common/colors/Colors';

export default function Index() {
  const theme = {
    ...DefaultTheme,
    dark: false,
    roundness: 30,
    colors: {
      ...DefaultTheme.Colors,
      primary: Colors.DEEP_BLUE,
      background: Colors.WHITE,
      surface: Colors.WHITE,
      placeholder: Colors.GREY,
      text: Colors.GREY,
      error: Colors.RED,
    },
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PaperProvider>
  );
}
