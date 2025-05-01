import {createSlice} from "@reduxjs/toolkit";
import {StateType} from "./types.ts";

const initialState: StateType = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        add10: (state) => {
            state.count += 10;
        }
    }
});
export const { increment, decrement,  add10} = counterSlice.actions;
export default counterSlice.reducer;

