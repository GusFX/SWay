import styled from 'styled-components/native';
import {Colors} from '../../common/colors/Colors';
import {TextInput as TextInputTemplate} from 'react-native-paper';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TextInput = styled(TextInputTemplate)`
  background-color: ${Colors.WHITE};
  flex: 1;
`;
