import styled from 'styled-components/native';
import {Colors} from '../../common/colors/Colors';

import {default as MapViewTemplate} from 'react-native-maps';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const MapView = styled(MapViewTemplate).attrs({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
})`
  flex: 1;
`;
