import {store} from "./store.ts";

export type StateType = {
    count: number;
}
export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = ReturnType<typeof store.dispatch>;