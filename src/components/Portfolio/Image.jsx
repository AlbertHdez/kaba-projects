import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../themes/ClassicDark'

const Image = (props) => {
	
	const SContainer = styled.image`
		width: 100%;
		height: 400px;
		background-image: url(https://picsum.photos/id/350/400);
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

Image.propTypes = {

}

export default Image