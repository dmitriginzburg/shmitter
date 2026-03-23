import {createStore} from "redux";
import {rootReducer} from "../reducer/rootReducer.js";



export const store = createStore(rootReducer);