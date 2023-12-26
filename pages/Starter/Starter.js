import React from 'react'
import { View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Starter({navigation}){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(64,100,203,0.9360119047619048) 56%, rgba(0,212,255,1) 100%)'}}>
            <Image
                source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{width: 200, height: 200}}
            />
            <Text style={{fontSize: 20, fontWeight: '600', color: 'white'}}>Your Daily ToDO</Text>
            <Text onPress={()=>{navigation.navigate('Add Your Task')}} style={{color: 'skyblue', textAlignVertical: 'bottom', marginTop: 2}}>Get Started <Icon name="chevron-right" size={13} color="skyblue" /></Text>
        </View>
    );
}