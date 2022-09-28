import { createBrowserRouter, Navigate } from "react-router-dom";
import Auth from "../Pages/Auth/Auth";
import Signup from '../Pages/Auth/Signup'
import Login from '../Pages/Auth/Login'
import Forgot from '../Pages/Auth/Forgot'
import ErrorPage from "../Pages/Error";
import Home from '../Pages/Home'
import Main from "../Pages/Dashboard/Main";
import Profile from "../Pages/Dashboard/Profile";
import Setting from "../Pages/Dashboard/Setting";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children:[{
            path: '',
            element: <Main />

        },{
            path: 'profile',
            element: <Profile />

        },{
            path: 'setting',
            element: <Setting />

        }]
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