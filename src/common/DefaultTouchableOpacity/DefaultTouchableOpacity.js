import React from 'react';
import {TouchableOpacity} from 'react-native';

// import { Container } from './styles';

const DefaultTouchableOpacity = props => {
  return <TouchableOpacity {...props} activeOpacity={0.6} />;
};

export default DefaultTouchableOpacity;
