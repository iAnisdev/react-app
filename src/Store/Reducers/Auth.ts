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
            state.isLoggedIn = true;
            break;
        case (AuthAction.LOGOUT):
            state.isLoggedIn = false;
            break;
        default:
            state.isLoggedIn = false;
    }
    return state
}
