import {createStore} from "redux";


// store
const store = createStore(reducer);


// reducer
function reducer(state={amount:1},action){
    if(action.type == 'increment') {

        // return state.amount+1; 
        /*      ❌
                ==> we can not return like this because reducer always returns state,
                and this will return value 2,
                but our state is {amount:1}
        */

        // So correct way to return update state is
        return {amount : state.amount + 1}

        /* 
            ❌
            As we know state are immutable (should be immutable),
            means it is bad practice to mutate the state directly,
            so we can not do something like ,

            state.amount = state.amount + 1;
            return state;

            because this changes/mutates the state directly
        */
    }
    return state;
}


// global state
console.log(store.getState())


// This is an Action
// {type:'increment'}

// Store disptach kargea action ko aur ye action ka listener kon he ? =>>> reducer he
store.dispatch({type:'increment'})


console.log(store.getState())
