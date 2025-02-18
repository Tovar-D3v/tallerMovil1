import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function UserDetails({ nombre, edad, ocupacion }) {
    return (
        <View>
            <Text>Nombre: {nombre}</Text>
            <Text>Edad: {edad}</Text>
            <Text>Ocupación: {ocupacion}</Text>
        </View>
    )
}