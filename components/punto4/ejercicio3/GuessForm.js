import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function GuessForm({ correctAnswer }) {
    const [respuesta, setRespuesta] = useState('');
    const [resultado, setResultado] = useState('');

    const validarRespuesta = () => {
        if (respuesta === correctAnswer) {
            setResultado('Respuesta correcta');
        } else {
            setResultado('Respuesta incorrecta');
        }
    }

    return (
        <View>
            <TextInput value={respuesta} onChangeText={setRespuesta} placeholder="Tu respuesta"/>
            <Button title="Validar" onPress={validarRespuesta} />
            <Text>{resultado}</Text>
        </View>
    )

}
