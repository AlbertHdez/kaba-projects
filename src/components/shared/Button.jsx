import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Button = ({text}) => {

	const Container = styled.button`
		padding: 10px 25px;
		font-size: 16px;
		font-weight: 500;
		color: white;
		background-color: #9D0FC7;
		border: none;
		border-radius: 10px;
		cursor: pointer;

		&:hover{
			background-color: #790C99;	
		}
	`

  return (
    <Container>
    	{text}
    </Container>
  )
}

export default Button