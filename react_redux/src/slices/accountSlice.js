import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 1,
};

export const fetchUserById = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    const { data } = await axios.get(
      `http://localhost:8080/accounts/${userId}`
    );
    return data.amount;
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
    decrementByAmount: (state,action) => {
      if(state.amount - action.payload >= 0) {
        state.amount -= action.payload
      }
      else{
        state.error = "Amount Can't be Negative"
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.pending = false;
      })
      .addCase(fetchUserById.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
