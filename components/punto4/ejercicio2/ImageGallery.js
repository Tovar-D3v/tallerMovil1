import React, {useState} from "react";
import {StyleSheet, Text, View, Button, TextInput} from "react-native";
import ImageList from "./ImageList";

export default function ImageGallery() {
    const [images, setImages] = useState([
        'https://www.chuwi.com/public/upload/image/20230824/4dc65233b9fe95f2345b9262a8751a77.jpg',
        'https://img.freepik.com/vector-gratis/noche-oceano-paisaje-luna-llena-estrellas-brillan_107791-7397.jpg',
        'https://cdn.pixabay.com/photo/2023/09/16/18/18/wallpaper-8257343_640.png'
    ]);

    return (
        <View>
            <ImageList images={images} />
        </View>
    )
}
