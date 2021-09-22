import React from 'react'
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import useAuth from '../../hooks/useAuth';

export default function Menu() {
    const navigation = useNavigation();
    const { logout } = useAuth();

    const logoutAccount = () => {
        Alert.alert(
            "Cerrar sesión",
            "Estas seguro de que quieres salir de la cuenta?",
            [
                {
                    text: "No"
                },
                {
                    text: "Si",
                    onPress: logout
                }
            ],
            { cancelable: false }
        )
    }

    return (
        <>
            <List.Section>
                <List.Subheader>Mi cuenta</List.Subheader>
                <List.Item
                    title="Cambiar nombre"
                    description="Cambia el nombre de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="face"></List.Icon>}
                    onPress={() => navigation.navigate("change-name")}
                />
                <List.Item
                    title="Cambiar email"
                    description="Cambia el email de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="at"></List.Icon>}
                    onPress={() => navigation.navigate("change-email")}
                />
                <List.Item
                    title="Cambiar username"
                    description="Cambia el nombre de tu usuario de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="sim"></List.Icon>}
                    onPress={() => navigation.navigate("change-username")}
                />
                <List.Item
                    title="Cambiar contraseña"
                    description="Cambia la contraseña de tu cuenta"
                    left={(props) => <List.Icon {...props} icon="key"></List.Icon>}
                    onPress={() => navigation.navigate("change-password")}
                />
                <List.Item
                    title="Mis direcciones"
                    description="Administra tus direcciones de envio"
                    left={(props) => <List.Icon {...props} icon="map"></List.Icon>}
                    onPress={() => { }}
                />
            </List.Section>
            <List.Section>
                <List.Subheader>App</List.Subheader>
                <List.Item
                    title="Pedidos"
                    description="Listado de todos los pedidos"
                    left={(props) => <List.Icon {...props} icon="clipboard-list"></List.Icon>}
                    onPress={() => { }}
                />
                <List.Item
                    title="Lista de deseos"
                    description="Listado de todos los productos que quieres comprar"
                    left={(props) => <List.Icon {...props} icon="heart"></List.Icon>}
                    onPress={() => navigation.navigate("favorites")}
                />
                <List.Item
                    title="Cerrar sesión"
                    description="Cierra esta sesión e inicia una nueva"
                    left={(props) => <List.Icon {...props} icon="logout"></List.Icon>}
                    onPress={logoutAccount}
                />
            </List.Section>
        </>
    )
}