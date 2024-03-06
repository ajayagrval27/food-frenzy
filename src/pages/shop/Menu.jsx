import Cards from '@components/Cards'
import React, { useEffect, useState } from 'react'

const categoryButton = ['all, salad, pizza, Soups, desserts, drinks']

const Menu = () => {
	const [menu, setMenu] = useState([])
	const [filteredItems, setFilteredItems] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [sortOptions, setSortOptions] = useState('default')

	// loading data
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/menu.json')
				const data = await response.json()
				setMenu(data)
				setFilteredItems(data)
			} catch (error) {
				console.log('error fetching data', error)
			}
		}
		fetchData()
	})

	// fitering data based on category
	const filterItems = (category) => {
		const filtered =
			category === 'all'
				? menu
				: menu.filter((item) => item?.category === category)
		setFilteredItems(filtered)
		setSelectedCategory(category)
	}

	// show all items
	const showAll = () => {
		setFilteredItems(menu)
		setSelectedCategory('all')
	}

	// sorting data
	const handleShortData = (option) => {
		setSortOptions(option)

		let sortedData = [...filteredItems]

		switch (option) {
			case 'A-Z':
				sortedData.sort((a, b) => a.name.localCompare(b.name))
				break
			case 'Z-A':
				sortedData.sort((a, b) => b.name.localCompare(a.name))
				break
			case 'low-high':
				sortedData.sort((a, b) => a.price - b.price)
				break
			case 'high-low':
				sortedData.sort((a, b) => b.price - a.price)
				break
			default:
				break
		}
	}

	return (
		<>
			{/* menu banner */}
			<div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
				<div className="py-48 flex flex-col items-center justify-center">
					{/* content */}
					<div className=" text-center px-4 space-y-7">
						<h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
							For the Love of Delicious{' '}
							<span className="text-green">Food</span>
						</h2>
						<p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
							Come with family & feel the joy of mouthwatering
							food such as Greek Salad, Lasagne, Butternut
							Pumpkin, Tokusen Wagyu, Olivas Rellenas and more for
							a moderate cost
						</p>
						<button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
							Order Now
						</button>
					</div>
				</div>
			</div>

			{/* menu shop selection */}

			<div className="section-container">
				{/* filtering and shorting */}

				<div>
					{/* all category btns */}
					<div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
						<button
							onClick={showAll}
							className={
								selectedCategory === 'all' ? 'active' : ''
							}
						>
							All
						</button>
						<button
							onClick={() => filterItems('Salad')}
							className={
								selectedCategory === 'Salad' ? 'active' : ''
							}
						>
							Salad
						</button>
						<button
							onClick={() => filterItems('Pizza')}
							className={
								selectedCategory === 'Pizza' ? 'active' : ''
							}
						>
							Pizza
						</button>
						<button
							onClick={() => filterItems('Soup')}
							className={
								selectedCategory === 'Soup' ? 'active' : ''
							}
						>
							Soups
						</button>
						<button
							onClick={() => filterItems('Dessert')}
							className={
								selectedCategory === 'Dessert' ? 'active' : ''
							}
						>
							Desserts
						</button>
						<button
							onClick={() => filterItems('Drinks')}
							className={
								selectedCategory === 'Drinks' ? 'active' : ''
							}
						>
							Drinks
						</button>
					</div>
				</div>

				{/* products items */}
				<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
					{filteredItems &&
						filteredItems.map((item, i) => (
							<Cards key={i} item={item} />
						))}
				</div>
			</div>
		</>
	)
}

export default Menu
