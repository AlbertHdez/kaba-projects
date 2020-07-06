import React from 'react'
import styled from 'styled-components'

import Button from './Button'

const CTAImage = () => {

	const SContainer = styled.div`
		width: 100%;
		height: 350px;
		border-radius: 15px;
		position: relative;
		background-image: url(https://picsum.photos/1100/350);
		background-size: cover;
	`
	const SWrapper = styled.div`
		width: 100%;
		height: 100%;
		position: absolute;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-areas: ". CTA CTA . . . . .";
	`
	const SContent = styled.div`
		grid-area: CTA;
		display: flex;
		flex-direction:column;
		justify-content: center;

		& > *{
			text-align: left;
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
						¿Listo para comenzar a colaborar?
					</h2>
					<p>
						Contactanos para hablar y comenzar con tu proyecto
					</p>
					<Button 
						size={"small"} 
						link={"https://facebook.com"} 
						text="Comenzar"
					/>
				</SContent>
			</SWrapper>
		</SContainer>
	)
}

export default CTAImage