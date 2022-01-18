
const initialState = {
    num: 0,
    text: "abc",
    list: []
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
            console.log(state);
            return state;
        case 'DELETE':
            let DeleteTemp = state.list;
            DeleteTemp.splice(DeleteTemp.findIndex((element)=>element.index === action.number), 1);

            return state;
        case 'DELETE_ALL':
            let Delete_ALL = state.list;
            Delete_ALL.splice(0);
            return state
        default: return state;
    }
}

export default reducers