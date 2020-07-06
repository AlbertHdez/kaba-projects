import React from 'react'
import styled from 'styled-components'

const CTAImage = () => {

	const SContainer = styled.div`
		width: 100%;
		height: 250px;
		border-radius: 15px;
		position: relative;
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

		& > h2 {
			font-size:24px;
			text-align: left;
			line-height: 36px;
			margin-bottom: 12px;
		}

		& > p {
			font-size: 16px;
			text-align: left;
			line-height: 24px
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
				</SContent>
			</SWrapper>
		</SContainer>
	)
}

export default CTAImage