import React, { ReactElement, useEffect, useMemo, useReducer } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { State } from '../Store/Store'
import { useDispatch } from 'react-redux'

interface PropsType {
    requiredAuth: Boolean
}

const PrivateRoutesProtector: React.FC<PropsType> = ({ requiredAuth }: PropsType): ReactElement => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    let Auth = useSelector((state: State) => state.Auth)
    let dispatch = useDispatch()
    let fireBaseAuth = getAuth()

    useEffect(() => {
        onAuthStateChanged(fireBaseAuth, (user) => {
            console.log(user)
            if (user) {
                dispatch({ type: 'login' })
                dispatch({
                    type: 'SET_USER', payload: {
                        displayName: user.displayName,
                        email: user.email,
                        uid: user.uid
                    }
                })
            } else {
                dispatch({ type: 'logout' })
                dispatch({ type: 'RESET_USER' })
                console.log(Auth)
            }
        })
        forceUpdate()
    }, [fireBaseAuth])

    if (requiredAuth) {
        if (!Auth.isLoggedIn) {
            return <Navigate to='/auth/login' />
        } else {
            return (
                <Outlet />
            )
        }
    } else {
        if (Auth.isLoggedIn) {
            return <Navigate to='/' />
        } else {

            return (
                <Outlet />
            )
        }
    }
}

export default PrivateRoutesProtector