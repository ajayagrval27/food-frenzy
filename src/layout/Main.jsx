import Navbar from '@components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import 'App.css'
import Footer from '@components/Footer'

const Main = () => {
	return (
		<>
			<Navbar />
			<div className="min-h-screen">
				<Outlet />
			</div>
			<Footer />
		</>
	)
}

export default Main
