import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

export default function ImageList({ images }) {
    return (
        <View>
            {images.map((url, index) => (
                <Image source={{ uri: url }} key={index} style={{ width: 100, height: 100 }} />
            ))}
        </View>
    )
}