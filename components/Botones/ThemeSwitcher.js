import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function ThemeSwitcher({ onCambioTema}) {
  const [estado, setEstado] = useState(false);

  const handleCambioTema = () => {
    setEstado(!estado);
    onCambioTema(!estado);
  };

  return (
    <View>
      <Button title="Boton" onPress={handleCambioTema} />
    </View>
  );
}
