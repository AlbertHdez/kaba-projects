import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'


const Button = ({text, shadow, size, theme, link}) => {

	const SContainer = css`
		width: ${size === "small" || size === "large" ? "fit-content" : size === "stretch" ? "100%" : "none"};
		padding: ${size === "small" ? "10px 15px": size==="large" ? "12px 40px" : size === "stretch" ? "10px 0px" : "none"};
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
	const SLink = styled.a`
		${SContainer}
		display: inline-block;
		text-decoration: none;
	`
	const SButton = styled.button`
		${SContainer}
	`

	if (link){
		return <SLink href={link}>{text}</SLink>
	}else{
		return <SButton>{text}</SButton>
	}
}

Button.defaultProps = {
	text: "Lorem ipsum",
	shadow: false,
	size: "large",
	theme: "dark"
}

Button.propTypes = {
	text: PropTypes.string,
	shadow: PropTypes.bool,
	size: PropTypes.string,
	theme: PropTypes.string,
	link: PropTypes.string
}

export default Button