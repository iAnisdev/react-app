import { createBrowserRouter } from "react-router-dom";
import Profile from './../Pages/Profile'
import Home from './../Pages/Home'
import Login from './../Pages/Login'
import Setting from './../Pages/Setting'
import Signup from './../Pages/Signup'
import ErrorPage from "../Pages/Error";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/setting',
        element: <Setting />
    },
    {
        path: '*',
        errorElement:<ErrorPage />
    }
])


export default router