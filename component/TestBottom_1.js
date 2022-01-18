import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const TestBottom_1 = () => {

    const state = useSelector((state)=>state);
    const isFocused = useIsFocused();

    React.useEffect(()=>{

    },[isFocused])

    return <>
        <View style={{  backgroundColor: "black", flexDirection: "row", justifyContent: "center" }}>
            <View style={{  height: '100%', flexDirection: 'row' }}>
                <Pressable onPress={() => navigation.goBack()} style={{ flex: 1, transform: [{ rotate: '180deg' }], justifyContent: 'center' }}>
                    {/* <LocalSvg asset={Arrow} width={25} height={25} fill={"#ffffff"} /> */}
                </Pressable>
                <View style={{ flex: 10, flexDirection: "column", justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: "white" }}>타이틀</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        </View>
        <Text>{state.num}</Text>
        <Text>{state.text}</Text>
    </>

}

export default TestBottom_1;