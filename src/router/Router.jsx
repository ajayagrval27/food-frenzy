import Main from 'layout/Main'
import Home from 'pages/Home'
import LogIn from 'pages/LogIn'
import SignUp from 'pages/SignUp'
import UpdateProfile from 'pages/UpdateProfile'
import Menu from 'pages/shop/Menu'
import PrivateRoutes from 'privateRoutes/PrivateRoutes'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{ path: '/', element: <Home /> },
			{
				path: '/menu',
				element: (
					<PrivateRoutes>
						<Menu />
					</PrivateRoutes>
				),
			},
			{
				path: '/update-profile',
				element: <UpdateProfile />,
			},
		],
	},
	{
		path: '/login',
		element: <LogIn />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
])

export default router
