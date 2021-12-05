import React from 'react';
import {Container, Spinner} from './styles';

const Loading = ({spinnerColor, spinnerSize}) => {
  return (
    <Container>
      <Spinner size={spinnerSize} color={spinnerColor} />
    </Container>
  );
};

Loading.defaultProps = {
  spinnerColor: 'DEEP_BLUE',
  spinnerSize: 'large',
};

export default Loading;
