import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../themes/ClassicDark'

//Components
import Navbar from '../../../components/shared/Navbar'
import HeaderCard from '../../../components/shared/HeaderCard'
import HeaderSection from '../../../components/shared/HeaderSection'
import HowWeWork from '../../../components/Home/HowWeWork'
import ImageSection from '../../../components/shared/ImageSection'
import CTAImage from '../../../components/shared/CTAImage'
import ServiceItem from '../../../components/Home/ServiceItem'
import Quote from '../../../components/Home/Quote'
import Footer from '../../../components/shared/Footer'

//Media
import { Icon, InlineIcon } from '@iconify/react'
import worldMap from '@iconify/icons-emojione-monotone/world-map'
import buildingConstruction from '@iconify/icons-emojione-monotone/building-construction'
import alarmClock from '@iconify/icons-emojione-monotone/alarm-clock'
import telephoneIcon from '@iconify/icons-emojione-monotone/telephone'
import briefcaseIcon from '@iconify/icons-twemoji/briefcase'
import airplaneArrival from '@iconify/icons-twemoji/airplane-arrival'
import lightBulb from '@iconify/icons-twemoji/light-bulb'
import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'
import instagramIcon from '@iconify/icons-mdi/instagram'
import HeaderImage from '../../../media/images/desktop-home.jpg'
import CtaImage from '../../../media/images/cta-desktop.jpg'
import AboutImage from '../../../media/images/about.jpg'
import MeImage from '../../../media/images/me.jpg'

const Desktop = props => {
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
		margin: 120px 0;

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
	const SServices = styled.section`
		width: 100%;
		display: grid;
		row-gap: 60px;
		justify-content: center;
		justify-items: center;

		background-color: ${palette.containerLight};
		border-radius: 20px;
		box-shadow: 0 3px 6px ${palette.boxShadow};
		padding: 100px 0px;
		margin: 120px 0;

		& > *:nth-child(2){
			display: grid;
			grid-template-columns: repeat(3, 250px);
			column-gap: 24px;
			justify-content: center;
		}
	`
	const SQuote = styled.section`
		display: grid;
		grid-template-columns: 450px 350px;
		column-gap: 70px;
		justify-content: center;
	`
	const SCTA = styled.section`
		width: 100%;
		margin: 120px 0 50px 0;
	`
	const SFooter = styled.section`
		width: 100%;
		max-width: 990px;
	`

	return (
		<SContainer>
			<SWrapper>
				<SHeader>
					<section>
						<Navbar/>
					</section>
					<HeaderCard 
						title={"Convirtiendo ideas en realidad"}
						button={{
							text: "Contactanos",
							link: "https://facebook.com"
						}}
						socialLinks = {[
							{
								href: "https://www.facebook.com/MarioHdezDev",
								icon: facebookIcon
							},
							{
								href: "https://twitter.com/MarioHdezDev",
								icon: twitterIcon
							},
							{
								href: "https://www.instagram.com/mariohdezdev",
								icon: instagramIcon
							},
							{
								href: "https://www.linkedin.com/in/marioahdezn",
								icon: linkedinIcon
							}
						]}
						img = {HeaderImage}
						author = {"Photo by Guido Hofmann on Unsplash"}
					/>
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
					<ImageSection
						src={AboutImage}
					/>
					<HeaderSection 
						titles={["¿Qué es KABA?","¿Que es lo que hacemos?","¿Por qué lo hacemos?"]}
						section={"Sobre Nosotros"}
						align= {"left"}>
						<p>KABA es un proyecto iniciado para volver ideas del equipo y de nuestro clientes en cosas reales.
							Lo que hacemos en KABA es el desarrollo de productos y servicios usando tecnología web.
						</p>
						<p>
							Esto lo hacemos para proveer soluciones a problemas actuales que enfrentan nuestros clientes y  la población en general.
						</p>
					</HeaderSection>
				</SWhatWeDo>
				<SServices>
					<HeaderSection
						section={"Nuestros Servicios"}
						titles={["Servicios que ofrecemos"]}
					>
					<p>Desde pequeños cambios hasta proyectos completos, nosotros podemos ofrecerte las siguientes soluciones entre otras.</p>
					</HeaderSection>
					<section>
						<ServiceItem
							icon={briefcaseIcon}
							title={"Tarjetas Web"}
							text={"Preséntate ante los demás con una web que tenga un resumen de ti, y no te compliques con tarjetas o blogs que son innecesarios."}
						/>
						<ServiceItem
							icon={airplaneArrival}
							title={"Pagina de aterrizaje"}
							text={"Muéstrale información sobre tu producto, servicio u organización a tus clientes o interesados de una manera breve y clara."}
						/>
						<ServiceItem
							icon={lightBulb}
							title={"Desarrollo de tu sitio"}
							text={"Háblanos de tu idea para tu web y comenzaremos a diseñar propuestas que cumplan con lo que buscas."}
						/>
					</section>
				</SServices>
				<SQuote>
					<Quote/>
					<ImageSection
						src={MeImage}
					/>
				</SQuote>
				<SCTA>
					<CTAImage
						title={"¿Listo para comenzar a desarrollar tu idea?"}
						text={"Contactanos para que platiquemos y comencemos con tu proyecto"}
						button={{
							text: "Contactanos"
							}}
						img = {CtaImage}
					/>
				</SCTA>
				<SFooter>
					<Footer
						socialLinks = {[
							{
								href: "https://www.facebook.com/MarioHdezDev",
								icon: facebookIcon
							},
							{
								href: "https://twitter.com/MarioHdezDev",
								icon: twitterIcon
							},
							{
								href: "https://www.instagram.com/mariohdezdev",
								icon: instagramIcon
							},
							{
								href: "https://www.linkedin.com/in/marioahdezn",
								icon: linkedinIcon
							}
						]}
					/>
				</SFooter>
			</SWrapper>
		</SContainer>
	)
}

Desktop.propTypes = {

}

export default Desktop