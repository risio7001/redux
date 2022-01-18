import * as React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Test_2 from './Test_2';


const Test_1 = () => {
    const [user, setUser] = React.useState(!user);
    const [id, setId] = React.useState(null);
    const state = useSelector((state)=>state);
    const dispatch = useDispatch();
    let text;

    return <>
        <Text/>
        <View>
            <View style={{ flexDirection: 'row', paddingVertical:10 }}>
                <TextInput
                    value={id}
                    onChangeText={setId}
                    style={{ backgroundColor: 'grey', flex:5, paddingVertical:10, borderRadius:10, paddingHorizontal:10 }}
                />
                <Pressable
                    onPress={() => {
                        dispatch({ type: 'MODIFY', text: id, text2: "cccccc" })
                        setUser(!user);
                        setId();
                    }}
                    style={{ flex: 1, backgroundColor: 'grey', borderRadius: 10, justifyContent: 'center' }}>
                    <Text
                        style={{ color: 'white', alignSelf: 'center' }}
                    >
                        추가하기
                    </Text>
                </Pressable>
            </View>

            <Test_2/>
        </View>
    </>

}

export default Test_1;