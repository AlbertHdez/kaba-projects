// Create a funtion that returns which kinda layout is required
const getKindaLayout = () => {
	let width = window.innerWidth
	let layout = "desktop"

	if (width <= 768){
		layout = "mobile"
	}else if(width > 768){
		layout = "desktop"
	}

	return layout
}


export default getKindaLayout