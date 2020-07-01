import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const Button = ({text, shadow = false, size='fit', theme="dark"}) => {

	const Container = styled.button`
		width: ${size === "fit" ? "auto" : size === "stretch" ? "100%" : "none"};
		padding: ${size === "fit" ? "10px 15px" : size === "stretch" ? "10px 0px" : "none"};
		text-align: center;
		font-size: 16px;
		font-weight: 500;
		color: ${theme==="dark" ?  "white" : theme==="light" ? "#9D0FC7": "none"};
		background-color: ${theme==="dark" ?  "#9D0FC7" : theme==="light" ? "white": "none"};
		border: ${theme==="light" ? "1px solid #9D0FC7" : "none"};
		border-radius: 10px;
		cursor: pointer;
		box-shadow: ${shadow ? '0 3px 6px rgba(0,0,0,0.3)': 'none'};
		&:hover{
			background-color: ${theme==="dark" ?  "#790C99" : theme==="light" ? "rgb(245, 245, 245)": "none"};
			box-shadow: ${shadow ? '0 1px 2px rgba(0,0,0,0.3)': 'none'};	
		}
	`

  return (
    <Container>
    	{text}
    </Container>
  )
}

export default Button