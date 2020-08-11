import React from 'react'
import PropTypes from 'prop-types'

import DesktopContainer from './Versions/DesktopContainer'
import MobileContainer from './Versions/MobileContainer'

//Helpers
import getKindaLayout from '../../helpers/getKindaLayout'

const Home = props => {

	const layout = getKindaLayout()

		
	if (layout === "desktop") {
		return <DesktopContainer/>
	}else if (layout === "mobile") {
		return <MobileContainer/>
	}
}

Home.propTypes = {

}

export default Home