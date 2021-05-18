import React, {useState} from 'react';
import {StyleSheet, Text, Button, View, TextInput} from 'react-native';

export default function AddTodo({submitHandler}) {
    
    

    const [text, setText] = useState('');

    

    const changeHandler = (val) => {
        setText(val);
    }
    
    return(
        <View>
            <TextInput 
            style = {styles.input} 
            placeholder = 'New To do...'
            onChangeText = {changeHandler}
            clearButtonMode = 'always'            
            />
            <Button onPress = {() => submitHandler(text)} title = 'Add To Do' color = '#FF8362'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
    }
})