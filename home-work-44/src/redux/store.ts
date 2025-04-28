import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./reducers.ts";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
