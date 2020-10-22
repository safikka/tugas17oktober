import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Tugas 17 Oktober</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        padding: 25,
        backgroundColor: '#FF4040'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
