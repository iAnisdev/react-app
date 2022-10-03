import { produce } from "immer"
enum AuthAction {
    LOGIN = 'login',
    LOGOUT = 'Logout'
}
interface Auth {
    isLoggedIn: Boolean
}

interface Action {
    type: String
}

const initialAuth: Auth = {
    isLoggedIn: false
}

export const AuthReducer = (state: Auth = initialAuth, action: Action) => {
    switch (action.type) {
        case (AuthAction.LOGIN):
            return produce(state , (draft) => {
                draft.isLoggedIn = true
            });
        case (AuthAction.LOGOUT):
            return produce(state , (draft) => {
                draft.isLoggedIn = false
            });
        default:
            return state;
    }
}
