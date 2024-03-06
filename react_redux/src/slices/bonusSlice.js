import { createAction, createSlice } from "@reduxjs/toolkit";


const initialState = {
    points : 0 
}

const incrementByAmount = createAction('account/incrementByAmount')


export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers :{
        increment : (state,action) => {
            state.points += 1
        },
        decrement : (state)=>{
            state.points -= 1
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(incrementByAmount,(state,action)=>{
            if(action.payload > 1000){
                state.points += 1
            }
            else{
                // Do nothing!!!!!
            }
        })
    }
})

export const {increment,decrement} = bonusSlice.actions;
export default bonusSlice.reducer;