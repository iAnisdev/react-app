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
            let newState = Object.assign({}, state)
            newState.isLoggedIn = true
            return newState;
        case (AuthAction.LOGOUT):
            let loggedOutState = Object.assign({}, state)
            loggedOutState.isLoggedIn = false
            console.log(loggedOutState)
            return loggedOutState;
        default:
            return state;
    }
}
