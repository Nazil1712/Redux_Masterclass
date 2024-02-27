import {createStore , applyMiddleware} from "redux";
import logger from "redux-logger";


// action name constants
const inc = 'increment';
const dec = 'decrement';
const incByAmt =  'incrementByAmount';


// store
// logger.default is just to remove unknown error
const store = createStore(reducer, applyMiddleware(logger.default));
const history = []

// reducer
function reducer(state={amount:1},action){
    if(action.type === inc) {
        return {amount : state.amount + 1}
    }
    if(action.type === dec) {
        return {amount : state.amount - 1}
    }
    if(action.type === incByAmt) {
        return {amount : state.amount + action.payload}
    }
    return state;
}


// Action creator
function increment() {
    return {type:inc}
}

function decrement() {
    return {type:dec}
}

function incrementByAmount(value) {
    return {type : incByAmt, payload : value}
}

setInterval(()=>{
    // store.dispatch(increment());
    // store.dispatch(decrement());
    store.dispatch(incrementByAmount(10));
}, 2000)