import Cards from '@components/Cards'
import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'

const categoryButton = ['all, salad, pizza, Soups, desserts, drinks']

const Menu = () => {
	const [menu, setMenu] = useState([])
	const [filteredItems, setFilteredItems] = useState([])
	const [selectedCategory, setSelectedCategory] = useState('all')
	const [sortOptions, setSortOptions] = useState('default')
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage] = useState(8)

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
	}, [])

	// fitering data based on category
	const filterItems = (category) => {
		const filtered =
			category === 'all'
				? menu
				: menu.filter((item) => item?.category === category)
		setFilteredItems(filtered)
		setSelectedCategory(category)
		setCurrentPage(1)
	}

	// show all items
	const showAll = () => {
		setFilteredItems(menu)
		setSelectedCategory('all')
		setCurrentPage(1)
	}

	// sorting data
	const handleShortData = (option) => {
		setSortOptions(option)

		let sortedData = [...filteredItems]

		switch (option) {
			case 'A-Z':
				sortedData.sort((a, b) => a.name.localeCompare(b.name))
				console.log(sortedData)
				break
			case 'Z-A':
				sortedData.sort((a, b) => b.name.localeCompare(a.name))
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
		setFilteredItems(sortedData)
		setCurrentPage(1)
	}

	// pagination
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	return (
		<>
			<div>
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
								Pumpkin, Tokusen Wagyu, Olivas Rellenas and more
								for a moderate cost
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

					<div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
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
								onClick={() => filterItems('salad')}
								className={
									selectedCategory === 'salad' ? 'active' : ''
								}
							>
								Salad
							</button>
							<button
								onClick={() => filterItems('pizza')}
								className={
									selectedCategory === 'pizza' ? 'active' : ''
								}
							>
								Pizza
							</button>
							<button
								onClick={() => filterItems('soup')}
								className={
									selectedCategory === 'soup' ? 'active' : ''
								}
							>
								Soups
							</button>
							<button
								onClick={() => filterItems('dessert')}
								className={
									selectedCategory === 'dessert'
										? 'active'
										: ''
								}
							>
								Desserts
							</button>
							<button
								onClick={() => filterItems('drinks')}
								className={
									selectedCategory === 'drinks'
										? 'active'
										: ''
								}
							>
								Drinks
							</button>
						</div>

						{/* sorting base filtering */}

						<div className="flex justify-end mb-4 rounded-sm">
							<div className="bg-black p-2 rounded-2xl">
								<FaFilter className="h-4 w-4 text-white" />
							</div>

							{/* sorting options */}

							<select
								className="bg-black text-white px-2 py-1 rounded-2xl"
								name="sort"
								id="sort"
								onChange={(e) =>
									handleShortData(e.target.value)
								}
								value={sortOptions}
							>
								<option value="default">Default</option>
								<option value="A-Z">A-Z</option>
								<option value="Z-A">Z-A</option>
								<option value="low-high">low-high</option>
								<option value="high-low">high-low</option>
							</select>
						</div>
					</div>

					{/* products items */}
					<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
						{currentItems &&
							currentItems.map((item, i) => (
								<Cards key={i} item={item} />
							))}
					</div>
				</div>

				{/* pagination section */}
				<div className="flex justify-center my-8">
					{Array.from({
						length: Math.ceil(filteredItems.length / itemsPerPage),
					}).map((_, index) => (
						<button
							key={index + 1}
							onClick={() => paginate(index + 1)}
							className={`mx-2 px-3 py-1 rounded-full ${
								currentPage === index + 1
									? 'bg-green text-white'
									: 'bg-gray-200'
							}`}
						>
							{index + 1}
						</button>
					))}
				</div>
			</div>
		</>
	)
}

export default Menu
