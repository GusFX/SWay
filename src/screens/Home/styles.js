import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
// import {Colors} from '../../common/colors/Colors';
import {Dimensions} from 'react-native';

import {InputText as InputTextTemplate} from '../../components';
import {default as MapViewTemplate} from 'react-native-maps';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const InputText = styled(InputTextTemplate)``;

export const InputView = styled.View`
  position: absolute;
  top: ${windowHeight * 0.1}px;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 15px 0 15px;
`;

export const MapView = styled(MapViewTemplate).attrs({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})`
  flex: 1;
  position: relative;
`;
