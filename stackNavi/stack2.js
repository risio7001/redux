import * as React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';

const stack2 = ({navigation}) => {

    return <>
        <Text onPress={()=>navigation.navigate("stack3")} >다음</Text>
    </>

}

export default stack2;