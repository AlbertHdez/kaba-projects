import React from 'react'
import PropTypes from 'prop-types'

//Versions
import DesktopContainer from './Versions/DesktopContainer'
import MobileContainer from './Versions/MobileContainer'

//Helpers
import getKindaLayout from '../../helpers/getKindaLayout'

const Portfolio = props => {

	const layout = getKindaLayout()

		
	if (layout === "desktop") {
		return <DesktopContainer/>
	}else if (layout === "mobile") {
		return <MobileContainer/>
	}
		
	
}

Portfolio.propTypes = {

}

export default Portfolio