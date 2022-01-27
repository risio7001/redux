import { NavigationContainer, useIsFocused, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

const IMPResult = () => {

    let routes = useRoute();
    // console.log(routes.params);

    let isFocused = useIsFocused();

    React.useEffect(()=>{
        if(routes.params.imp_success === false){
            navigation.navigate("PayTest");
        }
    },[isFocused])

    return <>
        <Text>Result</Text>
        <Text>결제내용</Text>
        <Text>{routes.params.imp_success === "true" ? "결제완료" : "결제실패"}</Text>
        <Text>{routes.params.imp_success === "true" ? "결제완료" : "결제실패"}</Text>
        <Text>{routes.params.name === false ? "결제실패" : routes.params.name}</Text>
        <Text>{routes.params.buyer_addr === false ? "결제실패" : routes.params.buyer_addr}</Text>
        <Text>{routes.params.error_msg ? routes.params.error_msg : "결제성공"}</Text>
    </>

}

export default IMPResult;