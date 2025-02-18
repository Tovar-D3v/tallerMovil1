import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function DynamicForm() {
  const [texto, setTexto] = useState("");
  const [nombre, setNombre] = useState("");

  const handlePress = () => {
    setNombre(texto);
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre completo"
        value={texto}
        onChangeText={nuevoTexto => setTexto(nuevoTexto)}
      />
      <Button title="Guardar" onPress={handlePress} />
      {nombre ? <Text>Nombre: {nombre}</Text> : null}
    </View>
  );
}
