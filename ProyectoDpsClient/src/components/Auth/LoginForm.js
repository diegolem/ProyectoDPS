import React, { useState } from 'react'
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "react-native-root-toast";
import useAuth from '../../hooks/useAuth';
import { loginApi } from "../../api/user";
import { formStyle } from "../../styles";
import * as Google from "expo-google-app-auth";


export default function LoginForm(props) {
    const { changeForm } = props;
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true);
            try {
                const response = await loginApi(formData);
                if (response.statusCode) throw "Error en el usuario o contraseña";
                login(response);
            } catch (error) {
                Toast.show(error, {
                    position: Toast.positions.CENTER,
                });
                setLoading(false);
            }
        },
    });

    const signInAsync = async () => {
        console.log("LoginForm.js 37 | loggin in");
        try {
          const { type, user } = await Google.logInAsync({
            iosClientId: `<YOUR_IOS_CLIENT_ID>`,
            androidClientId: `<YOUR_ANDROID_CLIENT_ID>`,
          });
    
          if (type === "success") {
            // Then you can use the Google REST API
            console.log("LoginForm.js 46 | success, navigating to profile");
            console.log(user);
          }
        } catch (error) {
          console.log("LoginForm.js 50 | error with login", error);
        }
    };

    return (
        <View>
            <TextInput
                label="Email o Username"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("identifier", text)}
                value={formik.values.identifier}
                error={formik.errors.identifier}
            />
            <TextInput
                label="Contraseña"
                style={formStyle.input}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                value={formik.values.password}
                error={formik.errors.password}
                secureTextEntry
            />
            <Button
                style={formStyle.btnSuccess}
                mode="contained"
                onPress={formik.handleSubmit}
                loading={loading}
            >Entrar</Button>
            <Button
                style={formStyle.btnText}
                labelStyle={formStyle.btnTextLabel}
                mode="text"
                onPress={changeForm}
            >Registrarse</Button>

            <Button
                style={formStyle.btnText}
                labelStyle={formStyle.btnTextLabel}
                mode="text"
                onPress={signInAsync}
            >Iniciar sesión con Google</Button>
        </View>
    )
}

function initialValues() {
    return {
        identifier: "",
        password: ""
    }
}

function validationSchema() {
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required(true),
    };
}