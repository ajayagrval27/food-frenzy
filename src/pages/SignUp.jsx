import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { AuthContext } from 'contexts/AuthProvider'
import { toast } from 'react-hot-toast'

const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const { createUser } = useContext(AuthContext)
	const location = useLocation()
	const navigate = useNavigate()

	const onSubmit = (data) => {
		const { email, password } = data
		createUser(email, password)
			.then((res) => {
				const user = res.user
				console.log(user)
				navigate('/login')
				toast.success('Account created successfully')
			})
			.catch((err) => {
				console.log(err.message)
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
					Create Your Account
				</h3>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Full Name</span>
					</label>
					<input
						{...register('name')}
						type="name"
						placeholder="Name"
						className="input input-bordered"
						required
					/>
				</div>
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
						Sign Up
					</button>
				</div>
				<p className="text-center my-2">
					Already have an account?
					<Link
						className="ms-1 hover:underline hover:text-green"
						to="/login"
					>
						Login Now
					</Link>
				</p>
				<div className="text-center space-x-3 mb-2">
					<button className="btn btn-circle hover:bg-green hover:text-white">
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

export default SignUp
