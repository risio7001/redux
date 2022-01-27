import IMP from 'iamport-react-native';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import Loading from './Loading';

const payIMP = ({navigation}) => {
    const dispatch = useDispatch();

    const callback = (response) =>{
        if(response.imp_success === "true"){    // 결제 성공시 redux에 담고 결제 완료 화면으로 이동
            let temp = Object.assign(data, response);   //데이터편집
            dispatch({type:"INSERT_PAY", data:temp});   //redux에 추가
            navigation.navigate("IMPResult", temp); //결제화면 이동
        }
        else{
            alert("결제실패");r
            navigation.navigate("PayTest");
        }
    }

    const data = {
        pg: 'nice',
        pay_method: 'card', //  결제 방식 선택시 변경 필요
        name: '플다 상품명',
        merchant_uid: `mid_${new Date().getTime()}`,
        amount: '100',
        buyer_name: '홍길동',
        buyer_tel: '01012345678',
        buyer_email: 'example@naver.com',
        buyer_addr: '서울시 강남구 신사동 661-16',
        buyer_postcode: '06018',
        app_scheme: 'example',
      };
    
    return <>
        <View>
            <Text>아임포트 모듈 테스트</Text>
        </View>
        <IMP.Payment
            userCode='imp88208088'  // 결제 가맹점 코드
            // tierCode=''
            loading={<Loading/>}
            data={data}
            callback={callback}
        />
    </>

}

export default payIMP;