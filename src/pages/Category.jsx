import React from 'react'

const categotyItems = [
	{
		title: 'Main Dish',
		dis: '(86 dishes)',
		image: '/images/home/category/img1.png',
	},
	{
		title: 'Break Fast',
		dis: '(12 break fast)',
		image: '/images/home/category/img2.png',
	},
	{
		title: 'Dessert',
		dis: '(48 dessert)',
		image: '/images/home/category/img3.png',
	},
	{
		title: 'Browse All',
		dis: '(255 Items)',
		image: '/images/home/category/img4.png',
	},
]

const Category = () => {
	return (
		<>
			<div className="section-container py-16">
				<div className="text-center">
					<p className="subtitle">Customer Favorites</p>
					<h2 className="title">Popular Categories</h2>
				</div>

				{/* Category cards */}

				<div className="flex flex-col sm:flex-row gap-8 justify-around items-center mt-12">
					{categotyItems &&
						categotyItems?.map((item, i) => {
							return (
								<div
									key={i}
									className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out"
								>
									<div className="flex w-full mx-auto items-center justify-center">
										<img
											className="bg-[#c1f1c1] p-5 rounded-full w-28 h-28"
											src={item.image}
											alt={item.title}
										/>
									</div>
									<div className="mt-5 space-y-1">
										<h5>{item.title}</h5>
										<p>{item.dis}</p>
									</div>
								</div>
							)
						})}
				</div>
			</div>
		</>
	)
}

export default Category
