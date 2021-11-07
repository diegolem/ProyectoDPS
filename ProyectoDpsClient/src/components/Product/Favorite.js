import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Favorite(props) {
    const { product } = props;

    const addFavorite = () => {
        console.log("Producto agregado a favoritos");
        console.log(product.title);
    }

    return (
        <View style={{ zIndex: -1 }}>
            <Button
                mode='contained'
                contentStyle={styles.btnAddFavoritesContent}
                labelStyle={styles.btnLabel}
                style={styles.btn}
                onPress={addFavorite}
            >
                Agregar a favoritos
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    btnLabel: {
        fontSize: 18
    },
    btnAddFavoritesContent: {
        backgroundColor: "#057b00"
    },
    btn: {
        marginTop: 20
    }
})