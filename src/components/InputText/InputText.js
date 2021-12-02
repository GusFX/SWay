import React, {useEffect, useRef} from 'react';
import {useField} from '@unform/core';
import {Container, TextInput} from './styles';

const InputText = ({label, name, secureEntry}, rest) => {
  const inputRef = useRef();
  const {error, registerField} = useField(name);

  const _handleChangeText = React.useCallback(text => {
    if (inputRef.current) {
      inputRef.current.value = text;
    }
  }, []);

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
        {...rest}
        mode="outlined"
        label={label}
        secureEntry={secureEntry}
        error={Boolean(error)}
        ref={inputRef}
        onChangeText={text => {
          _handleChangeText(text);
        }}
      />
    </Container>
  );
};

export default InputText;
