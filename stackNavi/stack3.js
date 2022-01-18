import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const stack3 = ({navigation}) => {

    const state = useSelector((state)=>state);
    const isFocused = useIsFocused();

    React.useEffect(()=>{

    },[isFocused])

    return <>
        <Text onPress={()=>navigation.goBack()}>이전</Text>
        <Text>
            {state.list.map((items, index)=>(
                <Text key={index}>
                    {items.value}{"\n"}
                </Text>
            ))}
        </Text>
    </>

}

export default stack3;