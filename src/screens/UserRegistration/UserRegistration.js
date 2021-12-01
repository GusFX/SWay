import React from 'react';
import {Form} from '@unform/mobile';
import {InputText} from '../../components';

const UserRegistration = () => {
  return (
    <>
      <Form>
        <InputText label="Nome" name="nome" />
        <InputText label="CPF" name="cpf" />
        <InputText label="E-Mail" name="email" />
        <InputText label="Senha" name="senha" />
        <InputText label="Confirme a senha" name="confirmacao" />
      </Form>
    </>
  );
};

export default UserRegistration;
