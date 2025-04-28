import {RootState} from "./types.ts";

export const selectCount = (state: RootState): number => state.counter.count;