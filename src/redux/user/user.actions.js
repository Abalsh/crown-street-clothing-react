export const setCurrentUser = user => {
    type: 'SET_CURRENT_USER' // SET_CURRENT_USER is written to match our user Reducer's case.
    payload: user
}