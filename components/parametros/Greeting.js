import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Greeting({ name }) {
  return (
    <View>
      <Text>Hola {name}</Text>
    </View>
  );
}