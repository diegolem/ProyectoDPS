import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from '../screens/Home';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from '../styles/colors';


const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                barStyle={styles.navigation}
                screenOptions={({ route }) => ({
                    tabBarIcon: (routeStatus) => {
                        return setIcon(route, routeStatus);
                    }
                })}
            >
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{
                        title: "Inicio"
                    }}
                />
                <Tab.Screen
                    name="favorites"
                    component={Favorites}
                    options={{
                        title: "Favoritos"
                    }}
                />
                <Tab.Screen
                    name="cart"
                    component={Cart}
                    options={{
                        title: "Carrito"
                    }}
                />
                <Tab.Screen
                    name="account"
                    component={Account}
                    options={{
                        title: "Mi cuenta"
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.bgDark
    },
    icon: {
        fontSize: 20,
        color: colors.fontLight
    }
});

function setIcon(router, routeStatus) {
    let iconName = "";

    switch (router.name) {
        case "home":
            iconName = "home";
            break;
        case "favorites":
            iconName = "heart";
            break;
        case "cart":
            iconName = "shopping-cart";
            break;
        case "account":
            iconName = "bars";
            break;
        default:

            break;
    }

    return <AwesomeIcon name={iconName} style={styles.icon} />
}