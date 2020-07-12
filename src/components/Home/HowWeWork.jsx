import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from '@iconify/react'
import earthMinus from '@iconify/icons-mdi/earth-minus'

import theme from '../../themes/ClassicDark'

const HowWeWork = ({icon, version, title, text}) => {

	const {palette, font} = theme

	const SMobile = css`
		min-width: 280px;
		grid-template-columns: 90px auto;
		grid-template-areas: "Icon Article";
		column-gap: 22px;
		align-items: center;
	`

	const SDesktop = css`
		width: 200px;
		row-gap: 14px;
		justify-items: center;
	`
	const SContainer = styled.div`
		display: grid;
		${version === "mobile" ? SMobile : version === "desktop" ? SDesktop : null}
	`
	const SIconWrapper = styled.div`
		width: 90px;
		height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #9D0FC7;
		border-radius: 10px;
		box-shadow: 0 2px 4px ${palette.boxShadow};
	`
	const SIcon = styled(Icon)`
		font-size: 60px;
		color: white;
	`
	const SArticle = styled.article`
		display: grid;
		justify-items: ${version === "mobile" ? "start" : version === "desktop" ? "center" : null};
		text-align: ${version === "mobile" ? "left" : version === "desktop" ? "center" : null};
		color: ${palette.text};

		& > h4 {
			font-size: ${font.text.size};
			font-weight: 600;
		}

		& > p {
			font-size: ${font.subtext.size};
		}
	`

	return (
		<SContainer>
			<SIconWrapper>
				<SIcon icon={icon}/>
			</SIconWrapper>
			<SArticle>
				<h4>{title}</h4>
				<p>{text}</p>
			</SArticle>
		</SContainer>
	)
}

HowWeWork.defaultProps = {
	icon: earthMinus,
	version: "desktop"
}

HowWeWork.propTypes = {
	icon: PropTypes.object,
	version: PropTypes.string,
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default HowWeWork;