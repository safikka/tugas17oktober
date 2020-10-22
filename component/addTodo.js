import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Text, Button} from 'react-native';

export default function AddTodo({tambahHandler}){
    
    const [text,setText] = useState('');

    const ubahHandler = (isi) => {
        setText(isi);
    }
    
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='tambah gawean...'
                onChangeText={ubahHandler}
            />
            <Button 
                onPress={() => tambahHandler(text)}
                title='tambah'
                color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})