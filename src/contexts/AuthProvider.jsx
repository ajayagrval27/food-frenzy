import React, { createContext, useEffect, useState } from 'react'
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth'
import { app } from 'firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(false)

	// create an users
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// sign up google user
	const signUpWithGoogle = () => {
		return signInWithPopup(auth, googleProvider)
	}

	// login using email and password
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	// logout
	const logout = () => {
		return signOut(auth)
	}

	// update user profile
	const updateUserProfile = (name, photoURL) => {
		console.log(name, photoURL)
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoURL,
		})
	}

	// check if user is logged in
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser)
				setLoading(false)
			}
		})
		return () => unsubscribe()
	}, [])

	const authInfo = {
		user,
		loading,
		createUser,
		signUpWithGoogle,
		login,
		logout,
		updateUserProfile,
	}

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	)
}

export default AuthProvider
