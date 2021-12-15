import styled from 'styled-components';
import {Colors} from '../../common/colors/Colors';
import {Text} from 'react-native-paper';
import {
  Button as ButtonTemplate,
  InputText as InputTemplate,
} from '../../components';

export const Button = styled(ButtonTemplate)``;

export const FormView = styled.View`
  padding: 20px 40px;
  justify-content: center;
`;

export const InputText = styled(InputTemplate)``;

export const Title = styled(Text)`
  font-size: 40px;
  color: ${Colors.BLACK};
`;

export const TitleView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 20%;
`;
