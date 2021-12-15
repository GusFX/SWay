import styled from 'styled-components';
import {Text} from 'react-native-paper';
import {Colors} from '../../common/colors/Colors';

export const Title = styled(Text)`
  font-size: 40px;
  color: ${Colors.BLACK};
`;

export const TitleView = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  margin-top: 20%;
`;
