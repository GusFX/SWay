import React from 'react';
import {Container, TextInput} from './styles';

const InputText = ({label}) => {
  return (
    <Container>
      <TextInput mode="outlined" label={label} onChangeText={() => {}} />
    </Container>
  );
};

export default InputText;
