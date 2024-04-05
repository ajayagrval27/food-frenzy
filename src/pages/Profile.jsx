import { AuthContext } from 'contexts/AuthProvider'
import React, { useContext } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Profile = ({ user }) => {
	const navigate = useNavigate()

	const { logout } = useContext(AuthContext)

	const handleLogout = () => {
		logout()
			.then(() => {
				toast.success('Logout successfully')
				navigate('/home')
			})
			.catch((error) => {
				console.error(error)
			})
	}

	return (
		<div>
			<div className="dropdown dropdown-end">
				<div
					tabIndex={0}
					role="button"
					className="btn btn-ghost btn-circle avatar"
				>
					<div className="w-10 rounded-full">
						{user?.photoURL ? (
							<img src={user.photoURL} alt="avatar" />
						) : (
							<img
								alt="Tailwind CSS Navbar component"
								src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
							/>
						)}
					</div>
				</div>
				<ul
					tabIndex={0}
					className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
				>
					<li>
						<Link to="/update-profile">Profile</Link>
					</li>
					<li>
						<a>Settings</a>
					</li>
					<li>
						<a
							onClick={handleLogout}
							className="text-red hover:text-red"
						>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Profile
