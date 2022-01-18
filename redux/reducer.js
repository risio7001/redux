
const initialState = {
    num: 0,
    text: "abc"
}

const reducers = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            state.num++;
            console.log(state);
            return state;
        case 'DECREMENT':
            state.num--;
            return state;
        case 'MODIFY':
            state.text = action.text;
            return state;
        default: return state;
    }
}

export default reducers