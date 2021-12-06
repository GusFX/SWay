import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, InputView, ListView, OcurrenceView} from './styles';
import {Container, MapView} from './styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <MapView
          initialRegion={{
            latitude: -29.6914,
            longitude: -53.8008,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </Container>
      <InputView>
        <Button
          text="Para onde vamos?"
          backgroundColor="BLACK"
          type="filled"
          onPressCallback={() => {}}
        />
      </InputView>
      <OcurrenceView>
        <Button
          text="REGISTRAR OCORRENCIA"
          backgroundColor="RED"
          type="filled"
          onPressCallback={() => navigation.navigate('OccurrenceRegistration')}
        />
      </OcurrenceView>
      <ListView>
        <Button
          text="OCORRENCIAS REGISTRADAS"
          backgroundColor="DEEP_BLUE"
          type="filled"
          onPressCallback={() => navigation.navigate('OccurrenceList')}
        />
      </ListView>
    </>
  );
};

export default Home;
