import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../themes/ClassicDark'

const MenuPop = props => {

	const SContainer = styled.section`
		padding: 16px 32px;
		background-color: ${theme.palette.containerDark};
		box-shadow: 0 3px 6px ${theme.palette.boxShadow};
		border-radius: 15px;
		display: grid;
		row-gap: 24px;
		color: ${theme.palette.text};
		justify-content:center;
		justify-items: center;
	`
	const STitle = styled.h2`
		font-size: ${theme.font.subtitle.size};
		font-weight: ${theme.font.subtitle.weight};
	`
	const SLinks = styled.div`
		width: 170px;
		display: grid;
		row-gap: 12px;
		align-items: center;
	`
	const SLink = styled.a`
		font-size: ${theme.font.subtitle.size};
		font-weight: 400;
		text-align: center;
	`
	const SLinkActive = styled.a`
		display: block;
		width: 100%;
		text-align: center;
		font-size: ${theme.font.subtitle.size};
		font-weight: 500;
		padding: 5px 0px; 
		background-color: ${theme.palette.containerLight};
		box-shadow: 0 2px 4px ${theme.palette.boxShadow};
		border-radius: 10px;
	`
	const SSocial = styled.div`
		display: flex; 

		& > *{
			margin-right: 10px;
		}

		& > *:nth-last-child(1){
			margin-right: 0px;
		}
	`

	return(
		<SContainer>
			<STitle>Menú</STitle>
			<SLinks>
				<SLinkActive>Inicio</SLinkActive>
				<SLink>Portafolio</SLink>
				<SLink>Contacto</SLink>
			</SLinks>

		</SContainer>
	)
}

MenuPop.propTypes = {

}

export default MenuPop