import React from 'react'
import Button from './Button'
import styled from 'styled-components/native'
import { Modal as NativeModal, View } from 'react-native'

const CenterContainer = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
`

const ModalContainer = styled(View)`
    padding-top: 20px;
    padding-horizontal: 20px;
    border-radius: 12px;
    align-items: center;
    background-color: white;
    elevation: 2;
`

const Modal = ({ children, onClose, visible }) => (
    <NativeModal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
    >
        <CenterContainer>
            <ModalContainer>
                {children}
                <Button onPress={onClose} text="Close modal" />
            </ModalContainer>
        </CenterContainer>
    </NativeModal>
)

export default Modal