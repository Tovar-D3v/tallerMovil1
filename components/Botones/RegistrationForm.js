import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function RegistrationForm({ onInformacion }) {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleInformacion = () => {
        onInformacion({ nombre, correo, contrasena });
    }
 
    return (
    <View>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Correo Electrónico"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <Button title="Ingresar" onPress={handleInformacion}/>
    </View>
  );
}
