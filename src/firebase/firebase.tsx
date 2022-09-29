import { createContext, FC, ReactElement, Fragment } from 'react'
import firebaseConfig from './firebaseConfig'
import app , { getApps} from 'firebase/app'
import 'firebase/database'
import { useDispatch } from 'react-redux'

interface PropsType {
    children: JSX.Element
}

export const FirebaseContext = createContext({})

const FirebaseProvider: FC<PropsType> = (props: PropsType): ReactElement => {
    const dispatch = useDispatch()

    let firebase: { app: any, database: any } = {
        app: null,
        database: null
    }
    if (getApps().length) {
        // app.initializeApp(firebaseConfig)
        // firebase.app = app
        // firebase.database = firebase.database().ref()
    }
    return (
        <>
            <FirebaseContext.Provider value={{ firebase }}>
                {props.children}
            </FirebaseContext.Provider>
        </>
    )
}
export default FirebaseProvider