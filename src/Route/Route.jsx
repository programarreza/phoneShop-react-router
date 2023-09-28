import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error/Error";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Phone from "../pages/Phone/Phone";

const myCreateRoute = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch('/data.json'),
			},
			{ 
				path: "/favorites",
				element: <Favorites></Favorites>
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/phones/:id",
				element: <Phone></Phone>,
				loader: () => fetch('/data.json')
			}
		]
	}
])

export default myCreateRoute;