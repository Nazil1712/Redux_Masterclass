import { incByAmt, getUsrFulfilled, incBonus } from "../actions";

export default function bonusReducer(state={points:0},action) {
    switch(action.type){
        case incByAmt:
            if(action.payload >= 1000) {
                return {points : state.points + 1}
            }
            else 
                return state 
           

        case getUsrFulfilled:
            if(action.payload >= 1000) {
                return {points : state.points + 1}
            }
            else 
                return state 

        case incBonus:
            return {points : state.points + 1}

        default : 
            return state;
    }
}