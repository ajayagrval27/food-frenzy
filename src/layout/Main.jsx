import Navbar from '@components/Navbar'
import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import 'App.css'
import Footer from '@components/Footer'
import { AuthContext } from 'contexts/AuthProvider'
import Loader from '@components/Loader'

const Main = () => {
	const { loading } = useContext(AuthContext)

	return (
		<>
			<div className="bg-primaryBG">
				{loading ? (
					<Loader />
				) : (
					<>
						<Navbar />
						<Outlet />
						<Footer />
					</>
				)}
			</div>
		</>
	)
}

export default Main
