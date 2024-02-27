import {createStore , applyMiddleware , combineReducers} from "redux";
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
const store = createStore(combineReducers({
    account : accountsReducer,
    bonus : bonusReducer
}), applyMiddleware(logger.default, thunk));
const history = []

// reducer
function accountsReducer(state={amount:1},action){
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

function bonusReducer(state={points:0},action) {
    switch(action.type){
        
        /* 
            In this action both reducer's state variable's value will be changed
            simultaneously beacuse both have same name of action
            which you may want OR may not.
        */ 

        case inc:
            return {points : state.points + 1}

        case dec:
            return {points : state.points - 1}

        default : 
            return state;
    }
}

// Async Action creator
function getUser(id) {
    return async(dispatch,setState)=>{
        const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
        dispatch(initUser(data.amount))
    }
}   


// Action creator
function initUser(value) {
    return {type:init, payload : value}
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

store.dispatch(decrement())