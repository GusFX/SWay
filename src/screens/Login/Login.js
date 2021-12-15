import React, {useRef} from 'react';
import {Button, FormView, InputText, Title, TitleView} from './styles';
import {Form} from '@unform/mobile';

const Login = () => {
  const formRef = useRef();

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
      </FormView>
    </>
  );
};

export default Login;
