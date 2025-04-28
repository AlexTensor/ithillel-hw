import {store} from "./store.ts";

export enum ActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    ADD10 = 'ADD10'
}

export type StateType = {
    count: number;
}
export type RootState = ReturnType<typeof store.getState>;