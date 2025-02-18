import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ChildCounter({ contador, onAumentar }) {
  return (
    <View>
      <Text>Contador: {contador}</Text>
      <Button title="Aumentar" onPress={onAumentar} />
    </View>
  );

}