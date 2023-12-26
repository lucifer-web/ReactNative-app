import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, TextInput, Button, Alert} from 'react-native';
export default function Add(){
    const [value, setValue] = useState('')
    const [value1, setValue1] = useState('')

    const onPressLearnMore=()=>{
        Alert.alert('Task Add Successfully!!')
    }
    const changeValue=(e)=>{
        setValue(e.target.value)
    }
    const changeValue1=(e)=>{
        setValue1(e.target.value)
    }
    return(
        <SafeAreaView style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(64,100,203,0.9360119047619048) 56%, rgba(0,212,255,1) 100%)'}}>
            <TextInput
                style={styles.input}
                onChangeText={changeValue}
                value={value}
            />
            <TextInput
                style={styles.input}
                onChangeText={changeValue1}
                value={value1}
            />
            <Button
                onPress={onPressLearnMore}
                title="Add"
                color= "#6b52ae"
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    input: {
      margin: 12,
      borderWidth: 1,
      width: '70%',
      padding: 3,
      color: 'white',
      borderColor: '#6b52ae',
    },
  });
  