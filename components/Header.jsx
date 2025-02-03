import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default function Header({}) {
    const [editing, setEditing] = useState(false);

    const toggleEdit = () => {
        if (editing === false) setEditing(true)
        else setEditing(false)
    }

    return (
        <View style={styles.header}>
            <Text style={styles.text} onPress={toggleEdit}>{editing ? 'Done' : 'Edit'}</Text>
            <Text style={styles.text}>Count It</Text>
            <Text style={styles.text}>+   </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", // Change to "center" to align items in the middle of the row
        paddingHorizontal: 20,
        paddingTop: 60, // Ensure space at the top
        paddingBottom: 10, // Add space at the bottom
        backgroundColor: "black",
    },
    text: {
        color: "white",
        fontSize: 20
    }
})