import { AuthContext } from 'contexts/AuthProvider'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

const UpdateProfile = () => {
	const { updateUserProfile } = useContext(AuthContext)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		const name = data.name
		const photoURL = data.photoURL
		updateUserProfile(name, photoURL)
			.then((res) => {
				toast.success('Profile updated successfully')
			})
			.catch((err) => {
				console.log(err.message)
				toast.error('Failed to update profile')
			})
	}

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
				<form onSubmit={handleSubmit(onSubmit)} className="card-body">
					<h3>Update your profile</h3>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Name</span>
						</label>
						<input
							{...register('name')}
							type="text"
							placeholder="your name"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Upload Photo</span>
						</label>
						<input
							type="text"
							placeholder="photoURL"
							required
							{...register('photoURL')}
							className="input input-bordered"
						/>
						{/* <input
							type="file"
							{...register('photoURL')}
							className="file-input w-full max-w-xs"
						/> */}
					</div>
					<div className="form-control mt-6">
						<button
							type="submit"
							className="btn bg-green text-white"
						>
							Update
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default UpdateProfile
