import React from 'react'
import PropTypes from 'prop-types'

import Mobile from './Mobile'

const MobileContainer = props => {

	const [isModalOpened, setModalOpened] = React.useState(false)

	const modalToggle = e => {
		setModalOpened(!isModalOpened)
	}

	return (
		<Mobile 
			modal={{
				isOpened: isModalOpened,
				toggle: modalToggle 
			}}
		/>
	)
}

MobileContainer.propTypes = {

}

export default MobileContainer