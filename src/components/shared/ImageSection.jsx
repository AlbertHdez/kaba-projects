import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const ImageSection = ({src, isFull}) => {

	const SContainer = styled.div`
		width: ${isFull ? "100%" : "350px"};
		height: 400px;
		background-image: url(${src});
		background-position: center;
		background-size: cover;
		border-radius: 15px;
	`
  return (
    <SContainer></SContainer>
  )
}

ImageSection.propTypes = {
	src: PropTypes.string,
	isFull: PropTypes.bool
}

ImageSection.defaultProps = {
	src: "https://picsum.photos/500/400",
	isFull: false
}

export default ImageSection;