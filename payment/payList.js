import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const payList = () => {

    const state = useSelector((state) => state.payList);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    
    React.useEffect(()=>{
        console.log(state);
    },[isFocused]);

    return <>
        <Text>결제 InsertTest</Text>
        {/* {} */}

        {/* {state.} */}
    </>

}

export default payList;