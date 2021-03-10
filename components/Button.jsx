import React from 'react'
import styled from 'styled-components/native'
import { Text, TouchableOpacity } from 'react-native';

const ButtonContainer = styled(TouchableOpacity)`
    margin-vertical: 40px;
    width: 120px;
    height: 40px;
    padding: 12px;
    border-radius: 12px;
    background-color: papayawhip;
    justify-content: center;
`

const ButtonText = styled(Text)`
    font-size: 16px;
    text-align: center;
    color: black;
`

const Button = ({ className, onPress, text }) => (
    <ButtonContainer activeOpacity={0.5} className={className} onPress={onPress}>
        <ButtonText>{text}</ButtonText>
    </ButtonContainer>
)

export default Button