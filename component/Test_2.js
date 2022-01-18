import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { Dimensions, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Test_2 = () => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const [reLoad, setReLoad] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {

    }, [reLoad]);

    // console.log(state);
    return <>
        <View style={styles.frame}>
            <Text />
            <Text >
                {state.text} 추가완료{"\n"}
            </Text>
            <Text />
            <ScrollView style={{height:Dimensions.get('window').height*0.5}}>
            {
                state.list.map((items, index) => (
                    <View key={index} style={styles.list}>
                        <Text style={styles.list_text}>
                            {index + 1}.        {items.value}
                        </Text>
                        <View style={{flexDirection:'row'}}>
                            {/* <Pressable
                                style={styles.list_modify}
                                onPress={() => {
                                    setIsVisible(true);
                                }}>
                                <Text>수정</Text>
                            </Pressable> */}
                            <Pressable
                                style={styles.list_delete}
                                onPress={() => {
                                    dispatch({ type: 'DELETE', number: items.index })
                                    setReLoad(!reLoad);
                                }}>
                                <Text>삭제</Text>
                            </Pressable>
                        </View>

                    </View>
                ))
            }
            </ScrollView>
            <Pressable onPress={()=>{
                dispatch({type:'DELETE_ALL'});
                setReLoad(!reLoad);
            }}
            style={{backgroundColor:'grey', borderRadius:10, paddingVertical:10, alignSelf:"center"}}
            >
            <Text style={{color:'white'}}>전체삭제</Text>
            </Pressable>
            
            <Modal visible={isVisible} transparent>
                <View style={{backgroundColor:'rgba(0,0,0,0.8)', height:Dimensions.get('window').height}}>
                    <SafeAreaView/>
                    <Text style={{textAlign:'right',paddingHorizontal:20,fontSize:20, color:'white'}}
                    onPress={()=>setIsVisible(false)}>X</Text>
                    <TextInput

                    />
                </View>
            </Modal>
        </View>
    </>
}
export default Test_2;

const styles = StyleSheet.create({
    frame: {
        marginHorizontal: 15,
        borderTopWidth: 1
    },
    list: {
        flexDirection: 'row', paddingVertical: 5, justifyContent: 'space-between', borderWidth: 1, borderRadius: 10
    },
    list_text: {
        paddingVertical: 10, paddingHorizontal: 10
    },
    list_delete: {
        borderRadius: 10, backgroundColor: 'grey', paddingVertical: 10, paddingHorizontal: 10, marginHorizontal: 10
    },
    list_modify:{
        borderRadius: 10, backgroundColor: 'yellow', paddingVertical: 10, paddingHorizontal: 10, marginHorizontal: 10
    }
})