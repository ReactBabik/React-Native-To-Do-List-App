import React, {useState} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';

export default function Sandbox() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.box1}>Box 1</Text>
            <Text style = {styles.box2}>Box 2</Text>
            <Text style = {styles.box3}>Box 3</Text>
            <Text style = {styles.box4}>Box 4</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    box1 :{
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,  
    },
    box2 :{
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,  
      },
    box3 :{
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,  
      },
    box4 :{
        flex: 1,
        backgroundColor: 'blue',
        padding: 40,  
      },
});