import { legacy_createStore as createStore } from "redux";
import { counterReducerFn } from "./counterReducer";

export const store = createStore(counterReducerFn);
