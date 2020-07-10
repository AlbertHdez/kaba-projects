import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, InlineIcon } from '@iconify/react'

import earthMinus from '@iconify/icons-mdi/earth-minus'

import theme from '../../themes/ClassicDark'


const ServiceItem = ({title, text, icon}) => {

	const {palette, font} = theme;

	const SContainer = styled.article`
		max-width: 250px;
		width: 100%;
		display: grid;
		row-gap: 12px;
	`
	const SIcon = styled(Icon)`
		font-size: ${font.subtitle.size};
	`
	const STitle = styled.h4`
		font-size: ${font.text.size};
		font-weight: 500;
		line-height: ${font.text.lineHeight};
	`
	const SDescription = styled.p`
		font-size: ${font.subtext.size};
		line-height: ${font.subtext.lineHeight};
	`

	return (
		<SContainer>
			<SIcon icon={icon}/>
			<STitle>
				{title}
			</STitle>
			<SDescription>
				{text}
			</SDescription>
		</SContainer>
	)
}

ServiceItem.defaultProps = {
	icon: earthMinus,
	title: "Title",
	text: "Description"
}

ServiceItem.propTypes = {
	icon: PropTypes.object,
	title: PropTypes.string,
	text: PropTypes.string
}

export default ServiceItem