import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GuessForm from "./GuessForm";

export default function Game() {
    const [correctAnswer, setCorrectAnswer] = useState('native');

    return (
        <View>
            <GuessForm correctAnswer={correctAnswer} />
        </View>
    )
}
