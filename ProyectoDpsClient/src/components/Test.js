import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';

export default function Test() {
    return (
        <View>
            <Text>Cambios</Text>
            <Button onPress={() => console.log("test")} mode={'contained'}>Prueba boton</Button>
        </View>
    )
}
