import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, InputView, ListView, OcurrenceView, MarkerText} from './styles';
import {Container, MapView} from './styles';

// import MapViewDirections from 'react-native-maps-directions';
// import getDirections from 'react-native-google-maps-directions';
// import {PermissionsAndroid} from 'react-native';

// import Geocoder from 'react-native-geocoding';

const Home = () => {
  const navigation = useNavigation();

  const [origin] = useState({
    latitude: -29.6914,
    longitude: -53.8008,
  });

  const [destiny] = useState({latitude: -29.689294, longitude: -53.798107});

  return (
    <>
      <Container>
        <MapView
          initialRegion={{
            latitude: -29.6914,
            longitude: -53.8008,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker coordinate={origin}>
            <MapView.Callout>
              <MarkerText>Origem</MarkerText>
            </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker coordinate={destiny}>
            <MapView.Callout>
              <MarkerText>Destino</MarkerText>
            </MapView.Callout>
          </MapView.Marker>
        </MapView>
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
