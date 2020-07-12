import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../themes/ClassicDark'


//Components
import Navbar from '../components/shared/Navbar'
import HeaderCard from '../components/shared/HeaderCard'
import HeaderSection from '../components/shared/HeaderSection'
import HowWeWork from '../components/Home/HowWeWork'
import ImageSection from '../components/shared/ImageSection'

//Media
import { Icon, InlineIcon } from '@iconify/react'
import worldMap from '@iconify/icons-emojione-monotone/world-map'
import buildingConstruction from '@iconify/icons-emojione-monotone/building-construction'
import alarmClock from '@iconify/icons-emojione-monotone/alarm-clock'
import telephoneIcon from '@iconify/icons-emojione-monotone/telephone'

const Home = props => {

	const {palette, font} = theme

	const SContainer = styled.section`
		width: 100%;
		background-color: ${palette.containerDark};
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px 0;
	`
	const SWrapper = styled.div`
		width: 100%;
		max-width: 1100px;
		display: grid;
		justify-items: center;
		row-gap: 100px;
	`

	const SHeader = styled.header`
		width: 100%;
		display: grid;
		row-gap: 30px;
		justify-items: center;
		& > *{
			width: 100%;
		}

		& > *:nth-child(1){
			max-width: 990px;
		}
	`

	const SHWW = styled.section`
		width: 100%;
		display: grid;
		row-gap: 50px;
		justify-items: center;

		& > *:nth-child(2){
			display: grid;
			grid-template-columns: repeat(4, 200px);
			column-gap: 16px;
			justify-items: center;
		}
	`

	const SWhatWeDo = styled.section`
		width: 100%;
		display: grid;
		column-gap: 60px;
		grid-template-columns: repeat(2, 350px);
		align-items: center;
		justify-content: center;
	`

	return (
		<SContainer>
			<SWrapper>
				<SHeader>
					<section>
						<Navbar/>
					</section>
					<HeaderCard title={"Convirtiendo ideas en realidad"}/>
				</SHeader>
				<SHWW>
					<HeaderSection 
						titles={["¿Como trabajamos en KABA?"]}
						section={"Sobre Nosotros"}
					>
						<p>En KABA nos dedicamos a ofrecerle las mejores opciones para que nuestros clientes y nuestros proyectos crezcan.</p>
					</HeaderSection>
					<section>
						<HowWeWork
							icon={worldMap}
							title={"Trabajos Remotos"}
							text={"No tenemos fronteras para estar a sus servicio"}
						/>
						<HowWeWork
							icon={buildingConstruction}
							title={"Proyectos Escalables"}
							text={"No limitamos las posibilidades de mejora"}
						/>
						<HowWeWork
							icon={alarmClock}
							title={"Puntales"}
							text={"Aprovechamos cada segundo disponible"}
						/>
						<HowWeWork
							icon={telephoneIcon}
							title={"Buena Atención"}
							text={"Escuchamos tus dudas para ofrecerte lo mejor"}
						/>
					</section>
				</SHWW>
				<SWhatWeDo>
					<ImageSection/>
					<HeaderSection 
						titles={["¿Qué es KABA?","¿Que es lo que hacemos?","¿Por qué lo hacemos?"]}
						section={"Sobre Nosotros"}
						align= {"left"}
					>
						<p>KABA es un proyecto iniciado para volver ideas del equipo y de nuestro clientes en cosas reales.
Lo que hacemos en KABA es el desarrollo de productos y servicios usando tecnología web.
</p>
<p>
	Esto lo hacemos para proveer soluciones a problemas actuales que enfrentan nuestros clientes y  la población en general.
</p>
					</HeaderSection>
				</SWhatWeDo>
			</SWrapper>
		</SContainer>
	)
}

Home.propTypes = {

}

export default Home