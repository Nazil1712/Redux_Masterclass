import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    points : 11 
}


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
    }
})

export const {increment,decrement} = bonusSlice.actions;
export default bonusSlice.reducer;