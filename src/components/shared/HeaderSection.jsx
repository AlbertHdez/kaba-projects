import React from 'react'
import styled from 'styled-components'

const HeaderSection = ({align}) => {

	const SContainer = styled.article`
		max-width: ${align === "center" ? "600px" : align === "left" ? "350px": "none"};
		display: grid;
		row-gap: 12px;
		justify-items: ${align === "center" ? "center" : align === "left" ? "start": "none"};

		& > *{
			text-align: ${align === "center" ? "center" : align === "left" ? "left": "none"};
		}
	`
	const SChip = styled.p`
		width: fit-content;
		padding: 4px 8px;
		background-color: #9D0FC7;
		font-size: 12px;
		font-weight: 500;
		color: white;
		border-radius: 5px;
	`
	const STitle = styled.h2`
		font-size: 24px;
		font-weight: 600;
	`
	const SContent = styled.div`
		display: grid;
		row-gap: 20px;
		& > p {font-size: 16px;}
	`

  return (
    <SContainer>
    	<SChip>Sobre nosotros</SChip>
    	<STitle>¿Cómo trabajamos en KABA?</STitle>
    	<SContent>
    		<p>KABA es un proyecto iniciado para volver ideas del equipo y de nuestro clientes en cosas reales.
Lo que hacemos en KABA es el desarrollo de productos y servicios usando tecnología web.
</p>
			<p>Esto lo hacemos para proveer soluciones a problemas actuales que enfrentan nuestros clientes y  la población en general.</p>
    	</SContent>
    </SContainer>
  )
}

HeaderSection.defaultProps = {
	align: "center"
}

export default HeaderSection;