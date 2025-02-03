import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import CountItem from '../components/CountItem';

export default function HomeScreen() {
    const navigation = useNavigation();
    const [countTable, setCountTable] = useState([{id: '1', name: 'Count', count: 10}]);

    const updateCountTable = (updatedCounter) => {
        setCountTable((prevTable) =>
            prevTable.map((item) =>
                item.id === updatedCounter.id ? updatedCounter : item
            )
        );
    }

    const updateCount = (id, newCount) => {
        setCountTable((prevTable) =>
            prevTable.map((item) =>
                item.id === id ? { ...item, count: newCount } : item
            )
        );
    };


    return (
        <View style={styles.container}>
            <Header></Header>
            <View style={styles.container}>
                <FlatList
                    data={countTable}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CountItem
                            counter={item}
                            onPress={() => navigation.navigate("Count", {updateCount, counter: item})}
                        />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
});