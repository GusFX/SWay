import styled, {css} from 'styled-components/native';
import {Colors} from '../../common/colors/Colors';

const _filledCss = css`
  background-color: ${({backgroundColor}) => Colors[backgroundColor]};
`;

const _outlinedCss = css`
  background-color: transparent;
`;

const _filledTextCss = css`
  color: ${Colors.WHITE};
`;

const _outlinedTextCss = css`
  color: ${({backgroundColor}) => Colors[backgroundColor]};
`;

export const Container = styled.View`
  height: 48px;
  border-radius: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  width: 100%;
  border-color: ${({backgroundColor}) => Colors[backgroundColor]};

  ${({type}) => {
    if (type === 'filled') {
      return _filledCss;
    }
    if (type === 'outlined') {
      return _outlinedCss;
    }
  }}
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: bold;

  ${({type}) => {
    if (type === 'filled') {
      return _filledTextCss;
    }
    if (type === 'outlined') {
      return _outlinedTextCss;
    }
  }}
`;

export const IconLeftWrapper = styled.View`
  margin-right: 10px;
`;
