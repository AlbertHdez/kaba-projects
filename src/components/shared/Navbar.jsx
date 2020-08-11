import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Icon } from '@iconify/react'
import menuIcon from '@iconify/icons-mdi/menu'

import theme from '../../themes/ClassicDark'
import breakpoints from '../../themes/Breakpoints'

const Navbar = ({handleOnClick}) => {

	const {font, palette} = theme

	const SContainer = styled.nav`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`
	const SLogo = styled.a`
		font-size: ${font.subtitle.size};
		color: ${palette.text};
		font-weight: ${font.subtitle.weight};
		text-decoration: none;

		&:hover{
			cursor: pointer;
		}
	`
	const SLink = styled(Link)`
		font-size: ${font.text.size};
		color: ${palette.text};
		font-weight: ${font.text.weight};
		text-decoration: none;

		&:hover{
			cursor: pointer;
			text-decoration: underline;
		}
	`
	const SLinks = styled.div`
		display: flex;

		& > * {
			margin-right: 12px;
		}

		& > *:nth-last-child(1){
			margin-right: 0px;
		}

		@media (max-width: ${breakpoints.tablet}){
			display: none;
		}
	`
	const SIcon = styled(Icon)`
		display: none;
		font-size: ${font.subtitle.size};
		color: ${palette.text};
		cursor: pointer;

		@media (max-width: ${breakpoints.tablet}){
			display: inline-block;
		}
	`

	return (
		<SContainer>
			<SLogo>KABA</SLogo>
			<SLinks>
				<SLink to="/">
					Inicio
				</SLink>
				<SLink to="/Portfolio">
					Portafolio
				</SLink>
			</SLinks>
			<SIcon icon={menuIcon} onClick={handleOnClick}/>
		</SContainer>
	)
}

Navbar.propTypes = {

}

export default Navbar