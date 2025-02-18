import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ChildCounter from "./ChildCounter";

export default function ParentCounter() {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  return (
    <View>
        <ChildCounter contador={contador} onAumentar={aumentar} />
    </View>
  )
}
