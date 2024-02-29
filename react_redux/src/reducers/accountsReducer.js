import { getUsrFulfilled, getUsrPending, getUsrRejected, inc, dec, incByAmt } from "../actions";

export default function accountsReducer(state={amount:1},action){
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