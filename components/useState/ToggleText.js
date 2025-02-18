import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ToggleText() {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  return (
    <View>
      {mostrarTexto ? <Text>Texto</Text> : null}

      <Button
        title={mostrarTexto ? "Ocultar texto" : "Mostrar texto"}
        onPress={() => setMostrarTexto(!mostrarTexto)}
      />
    </View>
  );
}
