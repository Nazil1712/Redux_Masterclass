import {createStore , applyMiddleware , combineReducers} from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk }  from "redux-thunk";

// action name constants
// const init = 'accounts/init';
const inc = 'accounts/increment';
const dec = 'accounts/decrement';
const incByAmt =  'accounts/incrementByAmount';
const getUsrPending = 'accounts/getUser/pending';
const getUsrFulfilled = 'accounts/getUser/fulfilled';
const getUsrRejected = 'accounts/getUser/rejected';

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
        case getUsrFulfilled:
            return {amount : action.payload , pending:false}

        case getUsrPending:
            return {...state , pending:true}

        case getUsrRejected:
            return {...state, error: action.error , pending:false}

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

        case getUsrFulfilled:
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
        try{
            dispatch(getUserAccountPending())
            const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
            dispatch(getUserAccountFulfilled(data.amount))
        }catch(error) {
            dispatch(getUserAccountRejected(error.message))
        }
    }
}   


// Action creator
// 1) Action creators for accounts
function getUserAccountFulfilled(value) {
    return {type:getUsrFulfilled, payload:value}
}

function getUserAccountPending() {
    return {type: getUsrPending}
}

function getUserAccountRejected(error) {
    return {type: getUsrRejected , error : error}
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

store.dispatch(getUserAccount(6))