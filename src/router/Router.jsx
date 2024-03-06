import Main from 'layout/Main'
import Home from 'pages/Home'
import Menu from 'pages/shop/Menu'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/menu', element: <Menu /> },
		],
	},
])

export default router
