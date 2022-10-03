import { produce } from "immer"

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
            return produce(state , (draft) => {
                draft = action.payload
            })
        case UserAction.RESET:
            return produce(state , (draft) => {
                draft = initialUser
            })
        default:
            return state
    }
}