import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function CountItem({counter, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}> 
            <Text style={styles.text}>{counter.name}</Text>
            <Text style={styles.text}>{counter.count}</Text>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    text: {
        color: "black",
        fontSize: 20
    }
})