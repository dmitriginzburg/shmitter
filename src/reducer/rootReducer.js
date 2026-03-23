import {combineReducers} from "redux";
import {userReducer} from "./userReducer.js";
import {statsReducer} from "./statsReducer.js";

export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})