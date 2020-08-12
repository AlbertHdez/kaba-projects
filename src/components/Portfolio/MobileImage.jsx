import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../themes/ClassicDark'

const MobileImage = ({img}) => {

	const SImage = styled.img`
		width: 100%;
		border-radius: 15px;
		box-shadow: 0 2px 4px ${theme.palette.boxShadow};
	`

	return (
		<SImage src={`${img}`}/>
	)
}

MobileImage.defaultProps = {
	img: "https://picsum.photos/id/350/400"
}

MobileImage.propTypes = {

}

export default MobileImage