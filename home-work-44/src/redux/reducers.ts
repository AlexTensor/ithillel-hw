import {ActionTypes, StateType} from "./types.ts";
import {Action} from "@reduxjs/toolkit";

const initialState: StateType = {
    count: 0,
}

export const counterReducer = (state: StateType = initialState,  action: Action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {count: state.count + 1}
        case ActionTypes.DECREMENT:
            return {count: state.count -1}
        case ActionTypes.ADD10:
            return {count: state.count + 10}
        default:
            return state;
    }
}