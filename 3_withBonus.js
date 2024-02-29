import {createStore , applyMiddleware , combineReducers} from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk }  from "redux-thunk";

// action name constants
const inc = 'accounts/increment';
const dec = 'accounts/decrement';
const incByAmt =  'accounts/incrementByAmount';
const init = 'accounts/init';

const incBonus = 'bonus/increment'

// store
// logger.default is just to remove unknown error
const store = createStore(combineReducers({
    account : accountsReducer,
    bonus : bonusReducer
}), applyMiddleware(logger.default, thunk));
const history = [];

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
        case incByAmt:
            if(action.payload >= 1000) {
                return {points : state.points + 1}
            }
            /* else 
                return state 
            */

        case incBonus:
            return {points : state.points + 1}

        default : 
            return state;
    }
}

// Async Action creator
function getUserAccount(id) {
    return async(dispatch,setState)=>{
        const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
        dispatch(initUser(data.amount))
    }
}   


// Action creator
// 1) Action creators for accounts
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


// 2) Action creators for bonus
function incrementBonus() {
    return {type:incBonus}
}

setInterval(()=>{    
    store.dispatch(incrementBonus())
},2000)