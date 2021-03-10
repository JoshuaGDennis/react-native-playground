import Modal from './components/Modal'
import React, { useState } from 'react';
import Button from './components/Button';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #fff;
  justify-content: center;
`

const StyledText = styled(Text)`
  display: flex;
  margin-bottom: 10px;
`

const App = () => {

  const [ showModal, setShowModal ] = useState(false)

  return (
    <StyledView>
      <Button text="Open modal" onPress={() => setShowModal(true)} />
      <Modal onClose={() => setShowModal(false)} visible={showModal}>
        <Text>HERES SOME STUFF</Text>
      </Modal>
      
    </StyledView>
  );
}

export default App