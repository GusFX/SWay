import React from 'react';
import DefaultTouchableOpacity from '../../common/DefaultTouchableOpacity';

import {Container, ButtonText, IconLeftWrapper} from './styles';

const Button = props => {
  const _handleShowIconLeft = React.useCallback(() => {
    if (props.iconLeft) {
      return <IconLeftWrapper>{props.iconLeft}</IconLeftWrapper>;
    }
  }, [props.iconLeft]);

  return (
    <DefaultTouchableOpacity onPress={props.onPressCallback}>
      <Container {...props}>
        {_handleShowIconLeft()}
        <ButtonText {...props}>{props.text}</ButtonText>
      </Container>
    </DefaultTouchableOpacity>
  );
};

export default Button;
