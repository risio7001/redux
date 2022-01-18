import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Test_2 = () => {

    const state = useSelector((state)=>state);
    // console.log(state);
    return <>
    <Text>
        asdfasdf{"\n"}
        {state.text}
    </Text>
    </>
}
export default Test_2;