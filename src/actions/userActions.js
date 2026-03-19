export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const CHANGE_NAME = 'CHANGE_NAME';

export const changeAvatar = url => ({
    type: CHANGE_AVATAR,
    payload: url
})

export const changeName = name => ({
    type: CHANGE_NAME,
    payload: name
})