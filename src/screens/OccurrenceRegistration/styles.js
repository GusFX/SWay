import styled from 'styled-components/native';
import {
  InputText as InputTemplate,
  Button as ButtonTemplate,
  Modal as ModalTemplate,
} from '../../components';

import {Text} from 'react-native-paper';

export const Button = styled(ButtonTemplate)``;
export const InputText = styled(InputTemplate)``;

export const FormView = styled.View`
  padding: 20px;
`;

export const FormTitle = styled(Text)`
  font-size: 16px;
`;

export const Modal = styled(ModalTemplate)``;

export const ModalText = styled(Text)`
  font-size: 18px;
`;

export const ModalView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
`;
