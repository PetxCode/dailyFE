import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register"
import HomeScreen from "../pages/screen/home/HomeScreen"
import ErrorScreen from "../error/error2/Error"
import SignInScreen from "../pages/auth/SigninScreen"
import PrivateRoute from "./privateRoute"
import Layout from "../components/common/Layout"
import TestScreen from "../pages/screen/test/TestScreen"
import TestScreen2 from "../pages/screen/test/TestScreen2"

export const mainRoute = createBrowserRouter([
    {
        path: "register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <SignInScreen />
    },
    {
        path: "/",
        element: <PrivateRoute>
            <Layout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                index: true,
                path: "test",
                element: <TestScreen />
            },
            {
                index: true,
                path: "test2",
                element: <TestScreen2 />
            }
        ]


    },
    {
        path: "*",
        element: <ErrorScreen />
    },
])