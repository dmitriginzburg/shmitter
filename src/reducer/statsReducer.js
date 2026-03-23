import {CHANGE_STATS} from "../actions/statsActions.js";

const initialState = {
    followers: 0,
    following: 0
};

export const statsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATS: {
            const res = state[action.payload.statsType] + action.payload.sum;

            return {
                ...state,
                [action.payload.statsType]: res < 0 ? 0 : res
            }
        }

        default:
            return state;
    }
}