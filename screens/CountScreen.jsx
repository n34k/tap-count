import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CountScreen({route}) {
    const {counter, updateCount} = route.params;
    const [currCount, setCount] = useState(counter.count);

    const addCount = () => {
        const newCount = currCount + 1;
        setCount(newCount); // Update local state
        updateCount(counter.id, newCount);
    }

    const minusCount = () => {
        const newCount = currCount - 1;
        setCount(newCount); // Update local state
        updateCount(counter.id, newCount);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{currCount}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={minusCount}><Text style={styles.button}>-</Text></TouchableOpacity>
                <TouchableOpacity onPress={addCount}><Text style={styles.button}>+</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        fontSize: 150
    },
    number: {
        fontSize: 200
    }
});