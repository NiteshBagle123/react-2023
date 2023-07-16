import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: false
}

// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'INCREMENT_COUNTER') {
//         return {
//             counter: state.counter + 1
//         }
//     }
//     if(action.type === 'DECREMENT_COUNTER') {
//         return {
//             counter: state.counter - 1
//         }
//     }

//     if(action.type === 'TOGGLE_COUNTER') {
//         return {
//             counter: -state.counter
//         }
//     }
//     return state;
// }
// const store = createStore(counterReducer);

// export default store;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            ++state.counter;
        },
        decrement(state) {
            --state.counter;
        },
        toggleCounter(state) {
            state.counter = !state.counter;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer 
    }
});
export const counterActions = counterSlice.actions;
export default store;

