import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header () {
    return (
        <View style = {styles.header}>
            <Text style = {styles.title}>My To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: '#FF8362',
    },
    title: {
        textAlign: 'left',
        marginStart: 20,    
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
        
    },
});