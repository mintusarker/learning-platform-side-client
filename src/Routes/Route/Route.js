import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AskSomeQuestion from "../../Pages/AskSomeQuestion/AskSomeQuestion";
import Category from "../../Pages/Category/Category";
import Course from "../../Pages/Coureses/Course";
import Details from "../../Pages/Details/Details";
import GetPremiumAccess from "../../Pages/GetPremiumAccess/GetPremiumAccess";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://learning-platform-server-tan.vercel.app/news')
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/register',
                element: <Register></Register>
            },

            {
                path: '/questions',
                element: <AskSomeQuestion></AskSomeQuestion>
            },

            {
                path: '/news/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://learning-platform-server-tan.vercel.app/news/${params.id}`)
            },
            {
                path: '/access/:id',
                element: <PrivateRoute><GetPremiumAccess></GetPremiumAccess></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learning-platform-server-tan.vercel.app/news/${params.id}`)
            },

            {
                path: '/courses',
                element: <Course></Course>,
                children: [
                    {
                        path: '/courses/:id',
                        element: <Category></Category>,
                        loader: ({ params }) => fetch(`https://learning-platform-server-tan.vercel.app/category/${params.id}`)
                    },
                ]
            },
        ]

    },

    {
        path: '*',
        element: <div className='text-center text-warning mt-5 pt-5'>
            <h3> Ops!! Page Not found: 4o4</h3> <p>You provide wrong link .</p>
        </div>
    }

])