import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../themes/ClassicDark'

//Components
import IconLink from './IconLink'

const Footer = ({socialLinks}) => {
	const {palette, font} = theme

	const SContainer = styled.nav`
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`
	const SBrand = styled.a`
		font-size: ${font.text.size};
		color: ${palette.text};
		font-weight: 500;
		cursor: pointer;
	`
	const SLinks = styled.div`
		display: flex;
		justify-items: flex-end;

		& *{
			font-size: ${font.subtitle.size};
		}

		& > *{
			margin-right: 14px;
		}

		& > *:nth-last-child(1){
			margin-right: 0px;
		}
	`

	return (
		<SContainer>
			<SBrand>KABA 2020</SBrand>
			<SLinks>
				{
		            socialLinks.map((link, key) => (
		              <IconLink key={key} color={palette.text} icon={link.icon} link={link.href}/>
	              	))
	          	}
			</SLinks>
		</SContainer>
	)
}

Footer.propTypes = {
	socialLinks: PropTypes.array.isRequired
}


export default Footer