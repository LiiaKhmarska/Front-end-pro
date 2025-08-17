import { createStore } from "redux";
import { CounterReducer } from "../reducer/CounterReducer";

const store = createStore(CounterReducer);
export default store;
