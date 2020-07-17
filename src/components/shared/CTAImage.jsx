import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Button from './Button'

//themes
import theme from '../../themes/ClassicDark'
import breakpoints from '../../themes/Breakpoints'

const {palette, font} = theme;
const {subtitle, text} = font;

const CTAImage = ({img, title, text, button, isMobile}) => {

	const SContainer = styled.div`
		width: 100%;
		height: ${isMobile ? "100%" : "350px"};
		border-radius: 15px;
		position: relative;
		background-image: url(${img});
		background-size: cover;
		overflow: hidden;
		box-shadow: 0 0 6px ${palette.boxShadow};
	`
	const SWrapper = styled.div`
		width: 100%;
		height: 100%;
		position: absolute;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas: ". CTA CTA .";
		background-color:  ${palette.shadow};

		@media (max-width: ${breakpoints.tablet}) {
			grid-template-columns: 24px 1fr 1fr 24px;
		}
	`
	const SContent = styled.div`
		grid-area: CTA;
		display: flex;
		flex-direction:column;
		justify-content: center;
		align-items: center;
		margin-top: 30px;

		& > *{
			text-align: center;
			color: ${palette.text};
		}

		& > h2 {
			font-size:${subtitle.size};
			line-height: ${subtitle.lineHeight};
			font-weight: ${subtitle.weight};
			margin-bottom: 7px;
		}

		& > p {
			font-size: ${text.size};
			line-height: ${text.lineHeight};
			margin-bottom: 12px;
		}
	`

	return (
		<SContainer>
			<SWrapper>
				<SContent>
					<h2>
						{title}
					</h2>
					<p>
						{text}
					</p>
					<Button 
						size={"small"} 
						link={button.link} 
						text={button.text}
					/>
				</SContent>
			</SWrapper>
		</SContainer>
	)
}

CTAImage.defaultProps = {
	title: "Aqui va el title",
	text: "Aqui va el text",
	button: {
		text: "Aquí va el button.text",
		link: "http://Aqui+va+el+link.com" 
	},
	img: "https://picsum.photos/1100/350",
	isMobile: false
}

CTAImage.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string,
	button: PropTypes.object,
	img: PropTypes.string,
	isMobile: PropTypes.bool
}
export default CTAImage