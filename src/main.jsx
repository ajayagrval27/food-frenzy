import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from 'router/Router'
import AuthProvider from 'contexts/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<Toaster position="top-center" reverseOrder={false} />
		<RouterProvider router={router} />
	</AuthProvider>
)
