import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../themes/ClassicDark'

const Image = ({img}) => {
	
	const SContainer = styled.div`
		width: 100%;
		height: 400px;
		background-image: url("${img}");
		background-size: cover;
		background-position: center;
		border-radius: 15px;
		box-shadow: 0 2px 4px ${theme.palette.boxShadow};
	`

	return (
		<SContainer>
			
		</SContainer>
	)
}

Image.defaultProps = {
	img: "https://picsum.photos/id/350/400"
}

Image.propTypes = {

}

export default Image