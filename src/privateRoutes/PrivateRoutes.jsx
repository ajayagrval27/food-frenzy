import Loader from '@components/Loader'
import { AuthContext } from 'contexts/AuthProvider'
import React, { useContext } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

const PrivateRoutes = ({ Children }) => {
	const { user, loading } = useContext(AuthContext)
	const location = useLocation()

	if (loading) {
		return <Loader />
	}
	if (user) {
		return Children
	}

	return <Navigate to="/signup" state={{ from: location }} replace></Navigate>
}

export default PrivateRoutes
