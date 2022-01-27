import axios from "axios";

const initialState = {
    num: 0,
    text: "abc",
    list: [],
    payInfo:[]
}

const reducers = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            state.num++;
            // console.log(state);
            return state;
        case 'DECREMENT':
            state.num--;
            return state;
        case 'MODIFY':
            let temp = state.list;
            temp.push({
                "index": temp.length,
                "value": action.text
            });

            state = {
                ...state,
                text: action.text,
                text2: action.text2,
                list: temp
            }
            // console.log(state);
            return state;
        case 'DELETE':
            let DeleteTemp = state.list;
            DeleteTemp.splice(DeleteTemp.findIndex((element) => element.index === action.number), 1);

            return state;

        case 'DELETE_ALL':
            let Delete_ALL = state.list;
            Delete_ALL.splice(0);
            return state;
//          결제 완료
        case 'INSERT_PAY':
            // console.log("check");
            state.payInfo.push(action.data); // 결제 데이터 추가
            // console.log(state);
            // console.log(state.payInfo.push);
            // let info = [];

            // // 결제 정보가 없을때 결제정보 새로 입력
            // if(state.payInfo === undefined || state.payInfo.length === 0){
            //     state = {
            //         ...state,
            //         payInfo:state.payInfo.length
            //     }
            // }
            // // 결제 정보가 1개 이상일때 길이를 찾아서 +1한 값을 넣는다.
            // else{

            // }

            // state = {
            //     ...state,
            //     payInfo : action.payInfo
            // }
            // console.log(state);
            return state;
//          결제 취소
        case 'CANCEL_PAY':
            state.payInfo.splice(state.payInfo.findIndex((element)=>element.imp_uid === action.cancel.imp_uid),1);
            return state;

        default: return state;
    }
}

export default reducers