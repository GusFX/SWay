import React, {useState, useCallback, useLayoutEffect, useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, InputView, ListView, OcurrenceView, MarkerText} from './styles';
import {Container, MapView} from './styles';
import {Colors} from '../../common/colors/Colors';

import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

// import Geocoder from 'react-native-geocoding';

const Home = () => {
  const navigation = useNavigation();

  const [origin, setOrigin] = useState({
    latitude: -29.6914,
    longitude: -53.8008,
  });
  const [destination] = useState({latitude: -29.689294, longitude: -53.798107});
  const [, setOccurrencesToRender] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const requestLocationPermission = useCallback(async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'App Location Permission',
          message:
            'Maps App needs access to your map ' + 'so you can be navigated.',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        setOrigin({
          latitude: -29.6914,
          longitude: -53.8008,
        });
      }
    } catch (err) {
      console.warn('erro ao solicitar permissao: ', err);
    }
  }, [getLocation]);

  const getLocation = useCallback(async () => {
    setIsLoading(true);
    Geolocation.getCurrentPosition(
      position => {
        const newOrigin = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        console.log(newOrigin);
        setOrigin(newOrigin);
        setIsLoading(false);
      },
      err => {
        console.error('erro ao buscar localizacao: ', err);
        setOrigin({
          latitude: -29.6914,
          longitude: -53.8008,
        });
        setIsLoading(false);
      },
      {enableHighAccuracy: true, timeout: 5000, maximumAge: 1000},
    );
  }, []);

  const getBoundary = useCallback(
    () => ({
      max: {
        latitude: origin.latitude + 0.001,
        longitude: origin.longitude + 0.001,
      },
      min: {
        latitude: origin.latitude - 0.001,
        longitude: origin.longitude - 0.001,
      },
    }),
    [origin],
  );

  const generatePoints = useCallback(boundary => {
    console.log(boundary);
  }, []);

  const mountBoundingBox = useCallback(() => {
    if (!isLoading) {
      const boundary = getBoundary();
      const points = generatePoints(boundary);
      setOccurrencesToRender(points);
    }
  }, [isLoading, getBoundary, generatePoints]);

  useLayoutEffect(() => {
    requestLocationPermission();
  }, [requestLocationPermission]);

  useEffect(() => {
    mountBoundingBox();
  }, [origin, mountBoundingBox]);

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
          <MapView.Circle
            center={destination}
            radius={150}
            fillColor={Colors.LIGHT_RED}
            strokeColor={Colors.RED}
          />
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
