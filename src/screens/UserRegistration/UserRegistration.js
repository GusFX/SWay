import React, {useRef} from 'react';
import {Form} from '@unform/mobile';
import {Button, FormView, InputText} from './styles';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/core';
import axios from 'axios';

const UserRegistration = () => {
  const formRef = useRef();
  const navigation = useNavigation();

  const submitRegistration = async userInfo => {
    const config = {
      name: userInfo.nome,
      email: userInfo.email,
      password: userInfo.senha,
      phone: userInfo.phone,
      cpf: userInfo.cpf,
    };
    const response = await axios.post(
      'https://s-way.herokuapp.com/api/user',
      config,
    );
    console.log('resposta da api: ', response);
  };

  const handleSubmit = async data => {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required(),
        cpf: Yup.string().length(11).required(),
        email: Yup.string().email().required(),
        phone: Yup.string().length(11).required(),
        senha: Yup.string().required(),
        confirmacao: Yup.string()
          .required()
          .equals([Yup.ref('senha')]),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      console.log('Dados Validados!!!!');
      await submitRegistration(data);
      navigation.navigate('Home');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach(e => {
          if (e.path) {
            validationErrors[e.path] = e.message;
          }
        });
        formRef.current.setErrors(validationErrors);
      }
      console.error('erro ao registrar novo usuario: ', error);
    }
  };

  return (
    <>
      <FormView>
        <Form onSubmit={data => handleSubmit(data)} ref={formRef}>
          <InputText label="Nome" name="nome" />
          <InputText label="CPF" name="cpf" maxLength={11} />
          <InputText label="E-Mail" name="email" />
          <InputText label="Telefone" name="phone" />
          <InputText label="Senha" name="senha" />
          <InputText label="Confirme a senha" name="confirmacao" />
        </Form>
        <Button
          text="Registrar"
          backgroundColor="DEEP_BLUE"
          type="filled"
          onPressCallback={() => {
            formRef.current?.submitForm();
          }}
        />
      </FormView>
    </>
  );
};

export default UserRegistration;
