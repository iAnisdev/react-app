enum UserAction {
    SET = 'SET_USER',
    RESET = 'RESET_USER'
}

interface User {
    name: string,
    email: string,
    password: string,
    id?: string
}


const initialUser: User = {
    name: '',
    email: '',
    password: '',
    id: ''
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
            state = action.payload
            break;
        case UserAction.RESET:
            state = initialUser
            break;
        default:
            state = initialUser
    }
    return state
}