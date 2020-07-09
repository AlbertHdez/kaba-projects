import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Icon, InlineIcon } from '@iconify/react'
import briefcaseIcon from '@iconify/icons-twemoji/briefcase'

import theme from '../../themes/ClassicDark'
const {palette, font} = theme;

const ServiceItem = props => {

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
			<SIcon icon={briefcaseIcon}/>
			<STitle>
				Tarjetas Web
			</STitle>
			<SDescription>
				Preséntate ante los demás con una web que tenga un resumen de ti, y no te compliques con tarjetas o blogs que son innecesarios.
			</SDescription>
		</SContainer>
	)
}

ServiceItem.propTypes = {

}

export default ServiceItem