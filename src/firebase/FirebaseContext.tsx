import { FC, createContext } from 'react'
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from './firebase'
import { updateProfile } from 'firebase/auth'

type PropsType = {
    children: any
}
type user = {
    name?: string,
    email: string,
    password: string
}
export interface context {
    signup: (user: user) => void,
    login: (user: user) => void,
    logout: () => void,
    reset: (email: string) => void
}

export const FirebaseContext = createContext<context>({
    signup: () => { },
    login: () => { },
    logout: () => { },
    reset: () => { },
})

const FirebaseContextProvider: FC<PropsType> = (props: PropsType) => {

    function signup(User: user) {
        return createUserWithEmailAndPassword(auth, User.email, User.password).then(async (userCredential) => {
            const newUser = userCredential.user;
            await updateProfile(newUser, {
                displayName: User.name
            })
        })
    }

    function login(User: user) {
        return signInWithEmailAndPassword(auth, User.email, User.password)
    }
    function logout() {
        return signOut(auth)
    }
    function reset(email: string) {
        return sendPasswordResetEmail(auth, email)
    }

    return (
        <FirebaseContext.Provider value={{ signup, login, logout, reset }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseContextProvider