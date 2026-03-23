import {CHANGE_AVATAR, CHANGE_NAME} from "../actions/userActions.js";
const initialState = {
    avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    name: 'Monster'
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_AVATAR:
            return {
                ...state,
                avatar: action.payload || state.avatar
            }
            case CHANGE_NAME:
                return {
                    ...state,
                    name: action.payload || state.name
                }
                default:
                    return state;
    }
}