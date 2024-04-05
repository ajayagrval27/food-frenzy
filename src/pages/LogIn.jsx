import { AuthContext } from 'contexts/AuthProvider'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const LogIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const { signUpWithGoogle, login } = useContext(AuthContext)

	const location = useLocation()
	const navigate = useNavigate()
	const { from } = location.state || { from: { pathname: '/' } }

	const onSubmit = (data) => {
		const { email, password } = data
		login(email, password)
			.then((res) => {
				const user = res.user
				navigate(from, { replace: true })
				toast.success('successfully logged in')
			})
			.catch((err) => {
				console.log(err.message)
				toast.error('Invalid email or password')
			})
	}

	const handleGoogleLogin = () => {
		signUpWithGoogle()
			.then((res) => {
				const user = res.user
				navigate(from, { replace: true })
				toast.success('successfully logged in')
			})
			.catch((err) => {
				toast.error(err.message)
			})
	}

	return (
		<div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center mt-16">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="card-body p-5 shadow-sm border-2 border-green"
				method="dialog"
			>
				<h3 className="font-bold text-2xl text-center">
					Login to Your Account
				</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input
						{...register('email')}
						type="email"
						placeholder="email"
						className="input input-bordered"
						required
					/>
				</div>
				<div className="form-control">
					<label className="label mt-1">
						<span className="label-text">Password</span>
					</label>
					<input
						{...register('password')}
						type="password"
						placeholder="password"
						className="input input-bordered"
						required
					/>
					<label className="label mt-1">
						<a href="#" className="label-text-alt link link-hover">
							Forgot password?
						</a>
					</label>
				</div>
				<div className="form-control mt-6">
					<button
						type="submit"
						className="btn bg-green rounded-full text-white"
					>
						Login
					</button>
				</div>
				<p className="text-center my-2">
					Do not have an account?{' '}
					<Link
						to="/signup"
						className="ms-1 hover:underline hover:text-green"
					>
						Signup Now
					</Link>
				</p>
				<div className="text-center space-x-3 mb-2">
					<button
						className="btn btn-circle hover:bg-green hover:text-white"
						onClick={handleGoogleLogin}
					>
						<FaGoogle />
					</button>
					<button className="btn btn-circle hover:bg-green hover:text-white">
						<FaFacebook />
					</button>
					<button className="btn btn-circle hover:bg-green hover:text-white">
						<FaGithub />
					</button>
				</div>
			</form>
		</div>
	)
}

export default LogIn
