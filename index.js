import {createStore , applyMiddleware} from "redux";
import logger from "redux-logger";

// store
// logger.default is just to remove unknown error
const store = createStore(reducer, applyMiddleware(logger.default));
const history = [];

// reducer
function reducer(state={amount:1},action){
    if(action.type == 'increment') {
        return {amount : state.amount + 1}
    }
    if(action.type == 'decrement') {
        return {amount : state.amount - 1}
    }
    if(action.type == 'incrementByAmount') {
        return {amount : state.amount + action.payload}
    }
    return state;
}


// Action creator
function increment() {
    return {type : 'increment'}
}

function decrement() {
    return {type : 'decrement'}
}

function incrementByAmount(value) {
    return {type : 'incrementByAmount', payload : value}
}

setInterval(()=>{
    // store.dispatch(increment());
    // store.dispatch(decrement());
    store.dispatch(incrementByAmount(10));
}, 2000)