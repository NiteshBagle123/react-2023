const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {
    if(action.type === 'INCREMENT_COUNTER') {
        return {
            counter: state.counter + 1
        }
    }

    if(action.type === 'DECREMENT_COUNTER') {
        return {
            counter: state.counter - 1
        }
    }
    return {
        counter: state.counter
    }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'DECREMENT_COUNTER' });
