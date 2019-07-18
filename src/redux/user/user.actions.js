import { UserActionTypes } from './user.types'
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,// SET_CURRENT_USER is written to match our user Reducer's case.
    payload: user
})