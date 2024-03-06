import React, { useEffect, useState } from 'react'
import { BiPhoneCall } from 'react-icons/bi'

const navItemsName = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Menu',
		link: '/menu',
		submenu: [
			{
				name: 'All',
				link: '/menu',
			},
			{
				name: 'Salad',
				link: '/menu',
			},
			{
				name: 'Pizza',
				link: '/menu',
			},
		],
	},
	{
		name: 'services',
		link: '/',
		submenu: [
			{
				name: 'Online Order',
				link: '/',
			},
			{
				name: 'Table Booking',
				link: '/',
			},
			{
				name: 'Order Tracking',
				link: '/',
			},
		],
	},
	{
		name: 'offers',
		link: '/',
	},
]

const Navbar = () => {
	const [isSticky, setisSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY
			if (offset > 50) {
				setisSticky(true)
			} else {
				setisSticky(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const navitems = (
		<>
			{navItemsName &&
				navItemsName?.map((item, index) => {
					return (
						<li key={index}>
							{item.submenu ? (
								<details>
									<summary>{item.name}</summary>
									<ul className="p-2">
										{item.submenu.map((subitem, index) => {
											return (
												<li key={index}>
													<a href={subitem?.link}>
														{subitem.name}
													</a>
												</li>
											)
										})}
									</ul>
								</details>
							) : (
								<a href={item.link}>{item.name}</a>
							)}
						</li>
					)
				})}
		</>
	)

	return (
		<>
			<header
				style={{ zIndex: '1001' }}
				className="max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-150 ease-in-out"
			>
				<div
					className={`navbar xl:px-24 ${
						isSticky
							? 'shadow-md fixed top-0 left-0 right-0 z-10 px-4 py-2 bg-base-100 backdrop-filter backdrop-blur-lg bg-opacity-60 transition-all duration-150 ease-in-out'
							: ''
					}`}
				>
					<div className="navbar-start">
						<div className="dropdown">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</div>
							<ul
								tabIndex={0}
								className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<a>Item 1</a>
								</li>
								<li>
									<a>Parent</a>
									<ul className="p-2">
										<li>
											<a>Submenu 1</a>
										</li>
										<li>
											<a>Submenu 2</a>
										</li>
									</ul>
								</li>
								<li>
									<a>Item 3</a>
								</li>
							</ul>
						</div>
						<a className="btn btn-ghost text-xl">
							<img src="/logo.png" alt="logo" />
						</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal px-1">
							{navitems}
						</ul>
					</div>

					<div className="navbar-end">
						{/* search btn */}
						<button className="btn btn-ghost btn-circle mr-1 hidden md:block">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
						{/* cart btn */}
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle mr-4"
						>
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item">
									8
								</span>
							</div>
						</div>
						<a className="btn bg-green rounded-full px-6 text-white flex items-center gap-2">
							<BiPhoneCall /> Contact
						</a>
					</div>
				</div>
			</header>
		</>
	)
}

export default Navbar
