import axios from "axios";

export const inc = 'accounts/increment';
export const dec = 'accounts/decrement';
export const incByAmt =  'accounts/incrementByAmount';
export const decByAmt = 'accounts/decrementByAmount';
export const getUsrPending = 'accounts/getUser/pending';
export const getUsrFulfilled = 'accounts/getUser/fulfilled';
export const getUsrRejected = 'accounts/getUser/rejected';

export const incBonus = 'bonus/increment'


export function getUserAccount(id) {
    return async(dispatch,setState)=>{
        try{
            dispatch(getUserAccountPending())
            const {data} = await axios.get(`http://localhost:8080/accounts/${id}`)
            dispatch(getUserAccountFulfilled(data.amount))
        }catch(error) {
            dispatch(getUserAccountRejected(error.message))
        }
    }
}   


// Action creator
// 1) Action creators for accounts
export function getUserAccountFulfilled(value) {
    return {type:getUsrFulfilled, payload:value}
}

export function getUserAccountPending() {
    return {type: getUsrPending}
}

export function getUserAccountRejected(error) {
    return {type: getUsrRejected , error : error}
}

export function increment() {
    return {type:inc}
}

export function decrement() {
    return {type:dec}
}

export function incrementByAmount(value) {
    return {type : incByAmt, payload : value}
}

export function decrementByAmount(value) {
    return {type: decByAmt, payload:value}
}

// 2) Action creators for bonus
export function incrementBonus() {
    return {type:incBonus}
}
