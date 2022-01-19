import styled from 'styled-components/native';
import {Colors} from '../../common/colors/Colors';

export const CardView = styled.View`
  flex-direction: row;
  background-color: ${Colors.WHITE};
  border-left-width: 8px;
  border-left-color: ${Colors.DEEP_BLUE};
  border-radius: 5px;
  margin: 5px 5px;
  height: 80px;
  width: 100%;
`;

export const DateTimeView = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 5px;
  border-right-width: 2px;
  border-right-color: ${Colors.LIGHT_GREY};
`;

export const DescriptionView = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding: 0 5px;
`;

export const DateView = styled.View``;
export const DateText = styled.Text`
  color: ${Colors.BLACK};
`;

export const TimeView = styled.View``;
export const TimeText = styled.Text`
  color: ${Colors.BLACK};
`;

export const TypeView = styled.View``;
export const TypeText = styled.Text`
  color: ${Colors.BLACK};
  font-weight: bold;
`;

export const DetailsView = styled.View`
  flex-direction: column;
  flex: 1;
  width: 90%;
`;
export const DetailsText = styled.Text`
  font-size: 12px;
  color: ${Colors.BLACK};
  flex-wrap: wrap;
`;
