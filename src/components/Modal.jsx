import React from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Modal = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
	}

	return (
		<dialog
			id="my_modal_5"
			className="modal modal-middle sm:modal-middle backdrop-blur-sm"
		>
			<div className="modal-box p-4">
				<div className="modal-action flex flex-col justify-center mt-0">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="card-body p-5"
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
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
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
								className="ms-1 hover:underline hover:text-green"
								to="/signup"
							>
								Signup Now
							</Link>
						</p>
					</form>
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
				</div>
			</div>
		</dialog>
	)
}

export default Modal
