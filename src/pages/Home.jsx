import React from 'react'
import Banner from '@components/Banner'
import Category from 'pages/Category'
import SpecialDishes from 'pages/SpecialDishes'
import Testimonals from 'pages/Testimonals'
import OurServises from 'pages/OurServises'

const Home = () => {
	return (
		<>
			<Banner />
			<Category />
			<SpecialDishes />
			<Testimonals />
			<OurServises />
		</>
	)
}

export default Home
