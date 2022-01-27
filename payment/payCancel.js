import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

const payCancel = ({navigation}) => {

    const isFocused = useIsFocused();

    React.useEffect(()=>{   // 화면 포커싱 될때마다 랜더링

    },[isFocused]);

    const handleCancel = () =>{
        console.log("123123");
    }

    return <>
        <Text></Text>
        <Text onPress={()=>handleCancel}>
            거래정보
        </Text>
    </>
}

export default payCancel;