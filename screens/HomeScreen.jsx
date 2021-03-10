import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
`

const HomeScreen = ({ navigation }) => {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <StyledView>
            <Button text="Open modal" onPress={() => setShowModal(true)} />
            <Button text="Go to another screen" onPress={() => navigation.navigate('Another', { id: '123' })} />
            <Modal onClose={() => setShowModal(false)} visible={showModal}>
              <Text>HERES SOME STUFF</Text>
            </Modal>
        </StyledView>
    )
}

export default HomeScreen