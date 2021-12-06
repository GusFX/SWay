import {Colors} from '../../common/colors/Colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: ${Colors.SPINNER_BACKGROUND};
`;

export const Spinner = styled.ActivityIndicator``;
