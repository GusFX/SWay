import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core';
import {Container, TextInput} from './styles';

const InputText = ({label, name}) => {
  const inputRef = useRef();
  const {error, registerField} = useField(name);
  useEffect(() => {
    registerField({
      name,
      getValue() {
        if (inputRef.current) {
          return inputRef.current.value;
        }
        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          /**
           * atribuindo valor ao objeto de retorno da submissão do formulário
           */
          inputRef.current.setNativeProps({text: value});
          inputRef.current.value = value;

          /**
           * setando valor para gerar um comportamento padrão do label do input
           * Sem essa linha, a Label fica sobreposta ao valor do input ao
           * realizar o blur do JSX renderizado em tela
           */
          inputRef.current.handleChangeText(value);
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({text: ''});
          inputRef.current.value = '';
          inputRef.current.handleChangeText('');
        }
      },
    });
  }, [name, registerField]);

  return (
    <Container>
      <TextInput
        mode="outlined"
        label={label}
        error={Boolean(error)}
        onChangeText={() => {}}
      />
    </Container>
  );
};

export default InputText;
