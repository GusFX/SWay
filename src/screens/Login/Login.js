import React, {useRef} from 'react';
import {FormView, InputText, Title, TitleView} from './styles';
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
        </Form>
      </FormView>
    </>
  );
};

export default Login;
