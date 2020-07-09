import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '@iconify/react'
import formatQuoteCloseOutline from '@iconify/icons-mdi/format-quote-close-outline'

import theme from '../../themes/ClassicDark'
const {font, palette} = theme



const Quote = props => {

	const SContainer = styled.article`
		max-width: 450px;
		width: 100%;
		display: grid;
		justify-items: left;
		align-content: center;
		row-gap: 20px;
		color: ${palette.text};
	`
	const SIcon = styled(Icon)`
		font-size: ${font.title.size};
	`
	const SQuote = styled.p`
		font-size: 22px;
		font-weight: 400;
		line-height: 33px;
		font-style: italic;
	`
	const SAuthor = styled.p`
		font-size: ${font.text.size};
		font-weight: 500;
		line-height: ${font.text.lineHeight};

		& > span {
			font-size: ${font.subtext.size};
			line-height: ${font.subtext.lineHeight};
			font-weight: ${font.subtext.weight};
		}
	`

	return (
		<SContainer>
			<SIcon icon={formatQuoteCloseOutline}/>
			<SQuote>
				Espero que podamos colaborar con usted para lograr un increible resultado que supere lo que buscabamos al inicio. Todos en KABA estamos a su servicio.
			</SQuote>
			<SAuthor>
				Mario Hernandez <br/><span>Miembro de KABA</span>
			</SAuthor>
		</SContainer>
	)
}

Quote.propTypes = {

}

export default Quote