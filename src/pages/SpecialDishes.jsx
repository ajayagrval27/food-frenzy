import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Cards from '@components/Cards'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const SimpleNextArrow = (props) => {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'red' }}
			onClick={onClick}
		>
			NEXT
		</div>
	)
}

const SimplePrevArrow = (props) => {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'green' }}
			onClick={onClick}
		>
			PREV
		</div>
	)
}

const SpecialDishes = () => {
	const [recipes, setRecipes] = useState([])
	const sliderRef = useRef(null)

	useEffect(() => {
		fetch('/menu.json').then((res) =>
			res.json().then((data) => {
				const specials = data.filter(
					(item) => item.category === 'popular'
				)
				setRecipes(specials)
			})
		)
	}, [])

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		nextArrow: <SimpleNextArrow />,
		prevArrow: <SimplePrevArrow />,
	}

	return (
		<>
			<div className="section-container my-16 relative">
				<div className="text-left">
					<p className="subtitle">Special Dishes</p>
					<h2 className="title md:w-[520px]">
						Standout Dishes From Our Menu
					</h2>
				</div>

				{/* Slider navigation */}
				<div className="md:absolute right-3 top-8 mb-10 md:mr-24">
					<button
						className="btn p-2 rounded-full ml-5"
						onClick={() => sliderRef.current.slickPrev()}
					>
						<FaArrowLeft className="w-8 h-8 p-1" />
					</button>
					<button
						className="btn p-2 rounded-full ml-5 bg-green"
						onClick={() => sliderRef.current.slickNext()}
					>
						<FaArrowRight className="w-8 h-8 p-1" />
					</button>
				</div>

				{/* Special dishes slider */}
				<Slider
					ref={sliderRef}
					{...settings}
					className="overflow-hidden mt-10 space-x-5"
				>
					{recipes &&
						recipes?.map((item, i) => (
							<Cards key={i} item={item} />
						))}
				</Slider>
			</div>
		</>
	)
}

export default SpecialDishes
