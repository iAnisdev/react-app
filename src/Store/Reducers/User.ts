enum UserAction {
    SET = 'SET_USER',
    RESET = 'RESET_USER'
}

interface User {
    displayName: string,
    email: string,
    uid?: string
}


const initialUser: User = {
    displayName: '',
    email: '',
    uid: ''
}

interface SetAction {
    type: UserAction.SET,
    payload: User
}
interface ResetAction {
    type: UserAction.RESET
}

export const UserReducer = (state: User = initialUser, action: SetAction | ResetAction) => {
    switch (action.type) {
        case UserAction.SET:
            let setState = Object.assign({}, state)
            setState = action.payload
            return setState
        case UserAction.RESET:
            let resetState = Object.assign({}, state)
            resetState = initialUser
            return resetState
        default:
            return state
    }
}