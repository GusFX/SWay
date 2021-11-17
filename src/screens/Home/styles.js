import styled from 'styled-components/native';
import {default as MapViewTemplate} from 'react-native-maps';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const MapView = styled(MapViewTemplate)`
  flex: 1;
`;
