import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function AlertButton({ mensaje }) {
  const mensajeAlerta = () => {
    Alert.alert("Alerta", mensaje);
  };

  return (
    <View>
      <Button title="Boton" onPress={mensajeAlerta} />
    </View>
  );
}
