import { createBrowserRouter } from "react-router-dom";
import Profile from './../Pages/Profile'
import Home from './../Pages/Home'
import Login from './../Pages/Login'
import Setting from './../Pages/Setting'
import Signup from './../Pages/Signup'
import ErrorPage from "../Pages/Error";
import Product from "../Pages/Product";
import Contact from "../Pages/Subpages/Contact";
import About from "../Pages/Subpages/About";
import Basic from "../Pages/Subpages/Basic";
import Main from "../Pages/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/main',
        element: <Main />
    },
    {
        path: '/profile',
        element: <Profile />,
        children: [
            {
                path: '',
                element: <Basic />

            },
            {
                path: 'contact',
                element: <Contact />

            },
            {
                path: 'about',
                element: <About />

            }
        ]
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
        path: '/product/:id',
        element: <Product />,
        loader: async (ctx) => {
            console.log("loader ==> ", ctx)
        },
        action: async ({ request, params }) => {

        }
    }
], {
    basename: '/'
})


export default router