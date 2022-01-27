import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

const payResult = ({ navigation, route }) => {
    let route4 = useRoute();
    // console.log(route4);

    return <>
        <Text style={{ textAlign: 'center', fontSize: 20, color: "white" }}>타이틀</Text>
    </>

}

export default payResult;