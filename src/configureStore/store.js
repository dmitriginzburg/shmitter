import {createStore} from "redux";
import {shmitterReducer} from "../reducer/shmitterReducer.js";

const initialState = {
    user: {
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster'
    },
    stats: {
        followers: 0,
        following: 0
    }
}


export const store = createStore(shmitterReducer, initialState);