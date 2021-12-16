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
import * as Yup from 'yup';

const Login = () => {
  const formRef = useRef();
  const navigation = useNavigation();

  const handleNavigate = route => {
    navigation.navigate(route);
  };

  const handleSubmit = async data => {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        senha: Yup.string().min(8).required(),
      });

      await schema.validate(data, {abortEarly: false});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach(e => {
          if (e.path) {
            validationErrors[e.path] = e.message;
          }
        });
        formRef.current.setErrors(validationErrors);
      } else {
        console.error('erro ao fazer login: ', error);
      }
    }
  };

  return (
    <>
      <TitleView>
        <Title>S-Way</Title>
      </TitleView>

      <FormView>
        <Form onSubmit={data => handleSubmit(data)} ref={formRef}>
          <InputText label="E-Mail" name="email" />
          <InputText label="Senha" name="senha" />
          <Button
            text="Entrar"
            backgroundColor="DEEP_BLUE"
            type="filled"
            onPressCallback={() => formRef.current.submitForm()}
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
