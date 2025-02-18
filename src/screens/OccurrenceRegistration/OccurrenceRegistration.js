import React, {useRef, useState} from 'react';
import * as Yup from 'yup';
import {Form} from '@unform/mobile';
import {Button, InputText, FormView, FormTitle} from './styles';
import {useNavigation} from '@react-navigation/core';
import {Select} from '../../components';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';

const OccurrenceRegistration = () => {
  const formRef = useRef();
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());

  const formatDate = dateTime => {
    return `${dateTime.getFullYear()}-${dateTime.getMonth()}-${dateTime.getDate()} ${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`;
  };

  const registerOccurrence = async occurrenceData => {
    formatDate(date);
    const config = {
      lat: 11.944121,
      long: 12.21331,
      neighbourhood: 'Rosas',
      street: occurrenceData.local,
      postal_code: 95000000,
      date_hour: formatDate(date),
      description: occurrenceData.detalhes,
      type: occurrenceData.acontecimento,
      user_id: 1,
    };

    console.log(config);
    const {data: response} = await axios.post(
      'https://s-way.herokuapp.com/api/occurrence',
      config,
    );
    console.log('resposta da api: ', response);
  };

  const handleSubmit = async data => {
    try {
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        acontecimento: Yup.string().required(),
        local: Yup.string().required(),
        detalhes: Yup.string().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await registerOccurrence(data);
      console.log('Dados Validados!!!!');
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
      console.error('erro ao registrar ocorrencia: ', error);
    }
  };

  const getSelectOptions = () => [
    {value: 'theft', label: 'Roubo'},
    {value: 'burglary', label: 'Arrombamento'},
    {value: 'robbery', label: 'Assalto'},
    {value: 'rape', label: 'Estupro'},
    {value: 'harassment', label: 'Assédio'},
    {value: 'strange_behaviour', label: 'Comportamento Estranho'},
    {value: 'drug_trafficking', label: 'Tráfico de drogas'},
    {value: 'faction_zone', label: 'Zona de facção'},
    {value: 'other', label: 'Outro'},
  ];

  return (
    <FormView>
      <Form onSubmit={data => handleSubmit(data)} ref={formRef}>
        <Select
          label="Qual foi o acontecimento"
          name="acontecimento"
          mode="flat"
          options={getSelectOptions()}
          onSelectionChange={() => {}}
        />
        <FormTitle>Data e Hora</FormTitle>
        <DatePicker date={date} onDataChange={setDate} mode="datetime" />
        <InputText label="Localização" name="local" />
        <InputText
          label="Detalhes"
          name="detalhes"
          multiline
          numberofLines={10}
        />
      </Form>
      <Button
        text="Registrar"
        backgroundColor="DEEP_BLUE"
        type="filled"
        onPressCallback={() => formRef.current?.submitForm()}
      />
    </FormView>
  );
};

export default OccurrenceRegistration;
