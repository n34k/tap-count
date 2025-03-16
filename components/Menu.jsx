import React from "react";
import { View, TouchableOpacity, TextInput, StyleSheet, Text, Dimensions, Modal } from "react-native";

export default function Menu({ addTaskMenuVisibility, setAddTaskMenuVisibility }) {
    const closeMenu = () => {
        setAddTaskMenuVisibility(false);
        console.log("Menu closed");
    };

    return (
        <Modal 
            visible={addTaskMenuVisibility} 
            transparent={true} 
            animationType="fade"
            onRequestClose={closeMenu} // Allows closing on Android back button
        >
            <View style={styles.overlay}>
                <View style={styles.menu}>
                    <Text style={styles.titleText}>Add Task</Text>
                    <View>
                        <Text>Task Name</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Name"
                            autoFocus={true}
                        />
                        <Text>Task Type</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={closeMenu} style={styles.button}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        justifyContent: "center",
        alignItems: "center",
    },
    menu: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: width * 0.75, // Adjusted for responsiveness
        alignItems: "center",
    },
    titleText: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "#f9f9f9",
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#3498db",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
});
