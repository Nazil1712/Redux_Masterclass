import {createStore , applyMiddleware} from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk }  from "redux-thunk";

// action name constants
const inc = 'increment';
const dec = 'decrement';
const incByAmt =  'incrementByAmount';
const init = 'init';

// store
// logger.default is just to remove unknown error
const store = createStore(reducer, applyMiddleware(logger.default, thunk));
const history = []

// reducer
function reducer(state={amount:1},action){
    switch(action.type) {
        case init:
            return {amount : action.payload}

        case inc:
            return {amount : state.amount + 1};
        
        case dec:
            return {amount: state.amount - 1};

        case incByAmt:
            return {amount: state.amount + action.payload}

        default:
            return state;
    }   
}

// Async API Call
/* const getUser = async() =>{
    const {data} = await axios.get('http://localhost:3000/accounts/1');
    console.log(data)
}

getUser() */

// Action creator
async function initUser(dispatch,getState) {
    const {data} = await axios.get('http://localhost:3000/accounts/1')
    dispatch({type : init, payload:data.amount})
}   

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
//     // store.dispatch(increment());
//     // store.dispatch(decrement());
//     // store.dispatch(incrementByAmount(10));
    store.dispatch(initUser)
}, 2000)