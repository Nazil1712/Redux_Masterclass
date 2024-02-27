import {createStore} from "redux";


// store
const store = createStore(reducer);
const history = [];

// reducer
function reducer(state={amount:1},action){
    if(action.type == 'increment') {

        // return state.amount+1; 
        /*      ❌
                ==> we can not return like this because reducer always returns state,
                and this will return value 2,
                but our state is {amount:1}
        */

                /* 
            ❌
            As we know state are immutable (should be immutable),
            means it is bad practice to mutate the state directly,
            so we can not do something like ,

            state.amount = state.amount + 1;
            return state;

            because this changes/mutates the state directly,
            This will create bugs/errors in the future
        */   

        // So correct way to return updated state is
        return {amount : state.amount + 1}
    }
    return state;
}


/* // global state
console.log(store.getState())


// This is an Action
// {type:'increment'}

// Store disptach kargea action ko aur ye action ka listener kon he ? =>>> reducer he
store.dispatch({type:'increment'})


console.log(store.getState()) */


// Now whenever value of state changes this subscribe will be called
store.subscribe(()=>{
    history.push(store.getState())
    console.log(history)
})

setInterval(()=>{
    store.dispatch({type:'increment'})
}, 2000)