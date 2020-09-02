import {UserActionTypes} from './user.actiontypes';
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});