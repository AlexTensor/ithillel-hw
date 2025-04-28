import {Action} from "@reduxjs/toolkit";
import {ActionTypes} from "./types.ts";

export const increment = () : Action  => ({type: ActionTypes.INCREMENT});
export const decrement = () : Action => ({type: ActionTypes.DECREMENT});
export const add10 = () : Action => ({type: ActionTypes.ADD10});