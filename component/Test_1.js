import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Test_2 from './Test_2';


const Test_1 = () => {
    const [user, setUser] = React.useState(!user);
    const [id, setId] = React.useState(null);
    const state = useSelector((state)=>state);
    const dispatch = useDispatch();

    let text;
    return <>
        <View>
            <Text> asdf ==== {state.num}</Text>
            <Text onPress={() => {
                dispatch({ type: 'INCREMENT' });
                setUser(!user);
            }}> UP </Text>

            <TextInput
                onChangeText={setId}
                style={{ backgroundColor: 'grey' }}
            />
            <Text onPress={() => { 
                dispatch({ type: 'MODIFY', text: id }) 
                setUser(!user);
                }}>
                수정
            </Text>
            <Test_2/>
        </View>
    </>

}

export default Test_1;