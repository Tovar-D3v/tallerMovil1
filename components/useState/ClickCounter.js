import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function ClickCounter() {
  const [numero, setNumero] = useState(0);

  const handlePress = () => {
    setNumero(numero + 1);
  };

  return (
    <View>
      <Text>{numero}</Text>
      <Button title="Boton" onPress={handlePress} />
    </View>
  );
}
