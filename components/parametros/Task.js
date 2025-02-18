import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Task({ task }) {
    return (
        <View>
            <Text>{task.title} {task.complete}</Text>
        </View>
    )
}