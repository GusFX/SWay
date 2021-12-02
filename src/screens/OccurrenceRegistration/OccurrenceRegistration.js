import React from 'react';
import {Form} from '@unform/mobile';
import {Button, InputText, FormView} from './styles';

const OccurrenceRegistration = () => {
  return (
    <FormView>
      <Form>
        <InputText label="Gravidade da Ocorrência" name="gravidade" />
        <InputText label="Qual foi o acontecimento" name="acontecimento" />
        <InputText label="Data" name="data" />
        <InputText label="Hora" name="hora" />
        <InputText label="Localização" name="local" />
        <InputText label="Detalhes" name="detalhes" />
      </Form>
      <Button
        text="Registrar"
        backgroundColor="DEEP_BLUE"
        type="filled"
        onPressCallback={() => {}}
      />
    </FormView>
  );
};

export default OccurrenceRegistration;
