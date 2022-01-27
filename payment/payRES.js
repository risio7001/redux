import * as React from 'react';
import { Dimensions, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import IMP from 'iamport-react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import moment from 'moment';
import { useRoute } from '@react-navigation/native';

const payRES = ({ navigation, route }) => {
    const [view, setView] = React.useState();

    const url = "https://web.nicepay.co.kr/demo/v3/mobileReq.jsp"
    let webView = React.useRef();
    let routes = useRoute();
    console.log(routes.params);
    let temp;
    const merchantKey = "EYzu8jGGMfqaDEp76gSckuvnaHHu+bC4opsSN6lHv3b2lurNYkVXrZ7Z1AoqQnXI3eLuaUFyoRNC6FkrzVjceg==";
    const handleSetRef = _ref => {
        webView = _ref;
        console.log('리턴값 ===>');
        console.log(webView);
    }

    /* [필수입력] 결제에 필요한 데이터를 입력합니다. */
    const data = {
        pg: 'nice',
        pay_method: 'card',
        name: '아임포트 결제데이터 분석',
        merchant_uid: `mid_${new Date().getTime()}`,
        amount: '39000',
        buyer_name: '홍길동',
        buyer_tel: '01012345678',
        buyer_email: 'example@naver.com',
        buyer_addr: '서울시 강남구 신사동 661-16',
        buyer_postcode: '06018',
        app_scheme: 'example',
        // [Deprecated v1.0.3]: m_redirect_url
    };

    const nicePayStart = async () => {
        let url = `https://web.nicepay.co.kr/v3/v3Payment.jsp`

        const merchantKey = "EYzu8jGGMfqaDEp76gSckuvnaHHu+bC4opsSN6lHv3b2lurNYkVXrZ7Z1AoqQnXI3eLuaUFyoRNC6FkrzVjceg==";
        const merchantID = "nicepay00m";

        var ediDate = moment().format('yyyyMMddhhmmss', new Date());
        var amt = '1004';
        var returnURL = 'http://localhost:3000/authReq';
        var goodsName = "나이스상품";
        var moid = 'nice_api_test_3.0';
        var buyerName = '구매자';
        var buyerEmail = 'happy@day.com';
        var buyerTel = '00000000000';

        await axios({
            method: 'post',
            headers: {
                'acceptCharset': 'euc-kr'
            },
            url: url,
            data: {
                'AuthResultCode': "",
                'AuthResultMsg': "",
                'TxTid': "",
                'AuthToken': "",
                'PayMethod': "",
                'MID': merchantID,
                'Moid': moid,
                'Amt': amt,
                'ReqReserved': "",
                'NextAppURL': "",
                'NetCancelURL': "",
            }
        })
        // .then(res=>{console.log(JSON.stringify(res).length)})
        .then(res=>{
            temp = JSON.stringify(res)
            console.log(temp.split(`</html>`,[1]))
        })
        .catch(err=>console.log('err'));

    }
    // React.useEffect(()=>{
    //     console.log(temp);
    // },[temp])

    return <>
        <Text>{routes.params}</Text>
        <Text onPress={()=>{
            nicePayStart()
        }}>결제모듈 ON</Text>
        {/* {view === undefined ? null : <WebView source={{html:view}}/>} */}
        {/* <TextInput
            onChangeText={}
        /> */}

        {/* <ScrollView>
            <View>
                <Text> 결제정보 입력창</Text>
                <Text/>
                <Text>대충 입력 완료 됐고 submit 하기</Text>
                <Text
                    onPress={()=>{
                        nicePayStart()
                    }}
                >위 정보로 나이스페이 API 호출하기</Text>

            </View>
        </ScrollView> */}
        {/* <WebView
        
            source={{html:`<!DOCTYPE html>
            <html>
            <head>
            <title>NICEPAY PAY REQUEST(UTF-8)</title>
            <meta charset="utf-8">
            <style>
                html,body {height: 100%;, width:100%;}
                form {overflow: hidden;}
            </style>
            <!-- PC payment window only (not required for mobile payment window)-->
            <script src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js" type="text/javascript"></script>
            <script type="text/javascript">
            //It is executed when call payment window.
            function nicepayStart(){
                if(checkPlatform(window.navigator.userAgent) == "mobile"){
                    document.payForm.action = "https://web.nicepay.co.kr/v3/v3Payment.jsp";
                    document.payForm.acceptCharset="euc-kr";
                    document.payForm.submit();
                }else{
                    goPay(document.payForm);
                }
            }
            
            //[PC Only]When pc payment window is closed, nicepay-3.0.js call back nicepaySubmit() function <<'nicepaySubmit()' DO NOT CHANGE>>
            function nicepaySubmit(){
                document.payForm.submit();
            }
            
            //[PC Only]payment window close function <<'nicepayClose()' DO NOT CHANGE>>
            function nicepayClose(){
                alert("결제가 취소 되었습니다");
            }
            
            //pc, mobile chack script (sample code)
            function checkPlatform(ua) {
                if(ua === undefined) {
                    ua = window.navigator.userAgent;
                }
                
                ua = ua.toLowerCase();
                var platform = {};
                var matched = {};
                var userPlatform = "pc";
                var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua) 
                    || /(windows phone)/.exec(ua) || /(iphone)/.exec(ua) 
                    || /(kindle)/.exec(ua) || /(silk)/.exec(ua) || /(android)/.exec(ua) 
                    || /(win)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua)
                    || /(cros)/.exec(ua) || /(playbook)/.exec(ua)
                    || /(bb)/.exec(ua) || /(blackberry)/.exec(ua)
                    || [];
                
                matched.platform = platform_match[0] || "";
                
                if(matched.platform) {
                    platform[matched.platform] = true;
                }
                
                if(platform.android || platform.bb || platform.blackberry
                        || platform.ipad || platform.iphone 
                        || platform.ipod || platform.kindle 
                        || platform.playbook || platform.silk
                        || platform["windows phone"]) {
                    userPlatform = "mobile";
                }
                
                if(platform.cros || platform.mac || platform.linux || platform.win) {
                    userPlatform = "pc";
                }
                
                return userPlatform;
            }
            </script>
            </head>
            <body>
            <form name="payForm" method="post" action="/" accept-charset="euc-kr">
                <table style="width:100%; height:100%;">
                    <tr>
                        <th style="font-size:300%">PayMethod</th>
                        <td><input type="text" name="PayMethod" value=""></td>
                    </tr>
                    <tr>
                        <th>GoodsName</th>
                        <td><input type="text" name="GoodsName" value="<%=goodsName%>"></td>
                    </tr>
                    <tr>
                        <th>Amt</th>
                        <td><input type="text" name="Amt" value="${routes.params}"></td>
                    </tr>				
                    <tr>
                        <th>MID</th>
                        <td><input type="text" name="MID" value="${merchantKey}"></td>
                    </tr>	
                    <tr>
                        <th>Moid</th>
                        <td><input type="text" name="Moid" value="<%=moid%>"></td>
                    </tr> 
                    <tr>
                        <th>BuyerName</th>
                        <td><input type="text" name="BuyerName" value="<%=buyerName%>"></td>
                    </tr>
                    <tr>
                        <th>BuyerEmail</th>
                        <td><input type="text" name="BuyerEmail" value="<%=buyerEmail%>"></td>
                    </tr>		
                    <tr>
                        <th>BuyerTel</th>
                        <td><input type="text" name="BuyerTel" value="<%=buyerTel%>"></td>
                    </tr>	 
                    <tr>
                        <th>ReturnURL [Mobile only]</th>
                        <td><input type="text" name="ReturnURL" value="<%=returnURL%>"></td>
                    </tr>
                    <tr>
                        <th>Virtual Account Expiration Date(YYYYMMDD)</th>
                        <td><input type="text" name="VbankExpDate" value=""></td>
                    </tr>		
                    
                    <input type="hidden" name="NpLang" value="KO"/> <!-- EN:English, CN:Chinese, KO:Korean -->					
                    <input type="hidden" name="GoodsCl" value="1"/> <!-- products(1), contents(0)) -->
                    <input type="hidden" name="TransType" value="0"/>	<!-- USE escrow false(0)/true(1) -->
                    <input type="hidden" name="CharSet" value="utf-8"/>	<!-- Return CharSet -->
                    <input type="hidden" name="ReqReserved" value=""/>	<!-- mall custom field -->
                                
                    <!-- DO NOT CHANGE -->
                    <input type="hidden" name="EdiDate" value="<%=ediDate%>"/>			<!-- YYYYMMDDHHMISS -->
                    <input type="hidden" name="SignData" value="<%=hashString%>"/>	<!-- EncryptData -->
                </table>
                <a href="#" class="btn_blue" onClick="nicepayStart();">REQUEST</a>
            </form>
            </body>
            </html>`}}
        /> */}
        {/* <WebView
            ref={handleSetRef}
            source={{url}}
        /> */}

    </> 

}
export default payRES;


{/* <IMP.Payment
userCode={'iamport'}  // 가맹점 식별코드
tierCode={'AAA'}      // 티어 코드: agency 기능 사용자에 한함
//   loading={<Loading />} // 로딩 컴포넌트 
data={data}           // 결제 데이터
callback={(e) => {
    navigation.navigate("payResult");
    console.log(e);
}}
/> */}