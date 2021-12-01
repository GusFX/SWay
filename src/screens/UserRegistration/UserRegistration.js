import React from 'react';
import {Form} from '@unform/mobile';
import {FormView, InputText} from './styles';
import {Button} from '../../components';

const UserRegistration = () => {
  return (
    <>
      <FormView>
        <Form>
          <InputText label="Nome" name="nome" />
          <InputText label="CPF" name="cpf" />
          <InputText label="E-Mail" name="email" />
          <InputText label="Senha" name="senha" />
          <InputText label="Confirme a senha" name="confirmacao" />
        </Form>
        <Button
          text="Registrar"
          backgroundColor="DEEP_BLUE"
          type="filled"
          onPressCallback={() => {}}
        />
      </FormView>
    </>
  );
};

export default UserRegistration;
