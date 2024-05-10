import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AvailableFoods from "../Pages/AvailableFoods";
import AddFoods from "../Pages/AddFoods";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/registration',
                element:<Register/>
            },
            {
                path:'/available-foods',
                element: <AvailableFoods/>
            },
            {
                path:'/add-foods',
                element:<AddFoods/>
            },
            {
                path:'/manage-my-food',
                element: <ManageMyFood/>
            },
            {
                path: '/my-food-request',
                element:<MyFoodRequest/>
            }
        ]
    },
]);

export default router;