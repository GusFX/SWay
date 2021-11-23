import React from 'react';
import {Container, TextInput} from './styles';

const InputText = ({label}) => {
  return (
    <Container>
      <TextInput mode="flat" label={label} onChangeText={() => {}} />
    </Container>
  );
};

export default InputText;
