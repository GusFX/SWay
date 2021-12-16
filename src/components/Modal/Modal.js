import React from 'react';
import {ModalContainer} from './styles';
import {default as CustomModal} from 'react-native-modal';

const Modal = props => {
  return (
    <CustomModal
      isVisible={props.enabled}
      onBackdropPress={() => props.onBackdropPress()}>
      <ModalContainer>
        {props.iconOnTop && <props.iconOnTop />}
        {props.children}
      </ModalContainer>
    </CustomModal>
  );
};

export default Modal;
