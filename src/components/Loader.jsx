import React from 'react'

const Loader = () => {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green border-t-transparent"></div>
		</div>
	)
}

export default Loader
