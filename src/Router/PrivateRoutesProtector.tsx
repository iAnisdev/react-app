import React, { ReactElement, useEffect, useMemo, useReducer } from 'react'
import { Navigate, Outlet, redirect } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { State } from '../Store/Store'
import { useDispatch } from 'react-redux'

interface PropsType {
    requiredAuth: Boolean
}

const PrivateRoutesProtector: React.FC<PropsType> = ({ requiredAuth }: PropsType): ReactElement => {
    let Auth = useSelector((state: State) => state.Auth)
    let dispatch = useDispatch()
    let fireBaseAuth = getAuth()

    useEffect(() => {
        onAuthStateChanged(fireBaseAuth, (user) => {
            if (user !== null) {
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
                render()
            }
        })
    }, [Auth.isLoggedIn])

    useEffect(() => {
    } , [Auth.isLoggedIn])

    function render(){
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

    return render()
}

export default PrivateRoutesProtector