import * as React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';

const stack1 = ({navigation}) => {

    return <>
        <Text onPress={()=>navigation.navigate("stack2")} >다음</Text>
    </>

}

export default stack1;