import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function Cart() {
    return (
        <View style={styles.container}>
            <Text>Estamos en Carrito</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});