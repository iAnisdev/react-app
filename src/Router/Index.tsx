import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from './../Pages/Home'
import Signup from '../Pages/Auth/Signup'
import Login from '../Pages/Auth/Login'
import Forgot from '../Pages/Auth/Forgot'
import ErrorPage from "../Pages/Error";
import Auth from "../Pages/Auth/Auth";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/auth',
        element:  <Auth />,
        children: [{
            path: '',
            element: <Navigate to='/auth/login' replace />
        },{
            path: 'login',
            element: <Login />
        },
        {
            path: 'signup',
            element: <Signup />
        },
        {
            path: 'forgot',
            element: <Forgot />
        }]
    }
], {
    basename: '/'
})


export default router