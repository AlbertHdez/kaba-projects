import React from 'react'
import styled from 'styled-components'

import Button from './Button'

//themes
import theme from '../../themes/ClassicDark'
import breakpoints from '../../themes/Breakpoints'

const CTAImage = ({img, title, text, button}) => {

	const SContainer = styled.div`
		width: 100%;
		height: 350px;
		border-radius: 20px;
		position: relative;
		background-image: url(${img});
		background-size: cover;
		overflow: hidden;
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
	`
	const SWrapper = styled.div`
		width: 100%;
		height: 100%;
		position: absolute;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-areas: ". CTA CTA .";
		background-color:  rgba(0,0,0,0.3);

		@media (max-width: 768px) {
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
			color: white;
		}

		& > h2 {
			font-size:24px;
			line-height: 36px;
			margin-bottom: 7px;
		}

		& > p {
			font-size: 16px;
			line-height: 24px;
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
	img: "https://picsum.photos/1100/350"
}

export default CTAImage