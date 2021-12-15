import React, {useRef} from 'react';
import {
  Button,
  FormView,
  InputText,
  Title,
  TitleView,
  TouchableText,
} from './styles';
import {Form} from '@unform/mobile';
import {useNavigation} from '@react-navigation/core';

const Login = () => {
  const formRef = useRef();
  const navigation = useNavigation();

  const handleNavigate = route => {
    navigation.navigate(route);
  };

  return (
    <>
      <TitleView>
        <Title>S-Way</Title>
      </TitleView>

      <FormView>
        <Form onSubmit={() => {}} ref={formRef}>
          <InputText label="E-Mail" name="email" />
          <InputText label="Senha" name="senha" />
          <Button
            text="Entrar"
            backgroundColor="DEEP_BLUE"
            type="filled"
            onPressCallback={() => {}}
          />
        </Form>
        <TouchableText onPress={() => handleNavigate('UserRegistration')}>
          Não é cadastrado? Registre-se aqui!
        </TouchableText>
      </FormView>
    </>
  );
};

export default Login;
