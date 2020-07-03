import React from 'react'
import styled, {css} from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from '@iconify/react'
import earthMinus from '@iconify/icons-mdi/earth-minus'

const HowWeWork = ({icon, version, title, text}) => {

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
	`

	const SIcon = styled(Icon)`
		font-size: 60px;
		color: white;
	`
	const SArticle = styled.article`
		display: grid;
		justify-items: ${version === "mobile" ? "start" : version === "desktop" ? "center" : null};
		text-align: ${version === "mobile" ? "left" : version === "desktop" ? "center" : null};

		& > h4 {
			font-size: 16px;
			font-weight: 600;
		}

		& > p {
			font-size: 14px;
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