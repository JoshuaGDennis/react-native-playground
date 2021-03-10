import React from 'react'
import { Text, View } from 'react-native';

const AnotherScreen = ({ route }) => (
    <View>
        <Text>ANOTHER ONE</Text>
        <Text>ID: {route.params.id}</Text>
    </View>
)

export default AnotherScreen