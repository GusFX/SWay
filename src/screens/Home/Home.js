import React from 'react';
import {Container, MapView} from './styles';

const Home = () => {
  return (
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
  );
};

export default Home;
