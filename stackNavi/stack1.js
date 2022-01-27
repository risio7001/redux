import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import * as React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const stack1 = ({navigation}) => {

    const state = useSelector((state) => state.payInfo);
    const dispatch = useDispatch();
    let isFocused = useIsFocused();
    const [reLoad, setReLoad] = React.useState(false);
    
    React.useEffect(()=>{
        // console.log(state);
        console.log("11");
    },[isFocused]);
    
    const cancel = async(index) =>{
        try{
            await axios({
                method:'post',
                url:"http://localhost:5001/test",
                data:{
                    "reason":"테스트 취소",
                    "imp_uid":state[index].imp_uid,
                    "cancel_request_amount":state[index].amount
                }

            }).then(res=>{
                if(res.data.code === 0){
                    dispatch({type:"CANCEL_PAY", cancel:res.data.response});
                    setReLoad(!reLoad);
                    alert("결제 취소되었습니다.");
                }
            })
            .catch(err=>console.log(err));
        }catch(err){
            console.log(err);
        }
    }

    return <>
        <Text>결제 리스트</Text>
        {state.map((items, index)=>(
            <View key={index}>
            <Text>{items.imp_uid}</Text><Text onPress={()=>cancel(index)}>취소하기</Text>
            </View>
        ))}

        {/* {state.} */}
    </>
    // return <>
    //     <Text onPress={()=>navigation.navigate("stack2")} >다음</Text>
    // </>

}

export default stack1;