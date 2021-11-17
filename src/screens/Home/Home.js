import React from 'react';
import {View} from 'react-native';

import MapView from 'react-native-maps';

const Home = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

export default Home;
