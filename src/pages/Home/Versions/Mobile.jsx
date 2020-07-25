import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../themes/ClassicDark'

//Components
import HeaderCover from '../../../components/shared/HeaderCover'
import HeaderSection from '../../../components/shared/HeaderSection'
import HowWeWork from '../../../components/Home/HowWeWork'
import ImageSection from '../../../components/shared/ImageSection'
import CTAImage from '../../../components/shared/CTAImage'
import ServiceItem from '../../../components/Home/ServiceItem'
import Quote from '../../../components/Home/Quote'
import Footer from '../../../components/shared/Footer'
import Modal from '../../../components/shared/Modal'
import MenuPop from '../../../components/shared/MenuPop'

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

const Mobile = ({modal}) => {
	const {palette, font} = theme

	const SContainer = styled.section`
		width: 100%;
		height: fit-content;
		background-color: ${palette.containerDark};
	`

	const SHeader = styled.header`
		height: calc(100vh + 30px);
	`
	const SHowWeWork = styled.section`
		margin: 70px 0px;
		padding: 0 36px;
		
		display: grid;
		row-gap: 45px;

		& > *:nth-child(2){
			display: grid;
			row-gap: 30px;
		}
	`
	const SAbout = styled.section`
		display: grid;
		row-gap: 50px;
		margin: 100px 0;

		& > *:nth-child(1){
			height: 100vh;
		}

		& > *:nth-child(2){
			padding: 0 36px;
		}
	`
	const SServices = styled.section`
		padding: 70px 36px;
		margin: 70px 0;
		display: grid;
		row-gap: 50px;
		background-color: ${palette.containerLight};
		border-radius: 15px;
		box-shadow: 0 3px 6px ${palette.boxShadow};

		& > *:nth-child(2){
			display: grid;
			row-gap: 30px;
		}
	`
	const SQuote = styled.section`
		padding: 0 36px;
		margin: 100px 0;
	`
	const SCTA = styled.section`
		height: 100vh;
		margin: 70px 0 0 0;
	`

	const SFooter = styled.footer`
		padding:36px 16px;
	`
	return (
		<SContainer>
			<SHeader>
				<HeaderCover
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
					handleMenuClick={modal.toggle}
				/>
			</SHeader>
			<SHowWeWork>
				<HeaderSection 
					titles={["¿Como trabajamos en KABA?"]}
					section={"Sobre Nosotros"}
					align={"left"}
				>
					<p>En KABA nos dedicamos a ofrecerle las mejores opciones para que nuestros clientes y nuestros proyectos crezcan.</p>
				</HeaderSection>
				<div>
					<HowWeWork
						icon={worldMap}
						title={"Trabajos Remotos"}
						text={"No tenemos fronteras para estar a sus servicio"}
						version={'mobile'}
					/>
					<HowWeWork
						icon={buildingConstruction}
						title={"Proyectos Escalables"}
						text={"No limitamos las posibilidades de mejora"}
						version={'mobile'}
					/>
					<HowWeWork
						icon={alarmClock}
						title={"Puntales"}
						text={"Aprovechamos cada segundo disponible"}
						version={'mobile'}
					/>
					<HowWeWork
						icon={telephoneIcon}
						title={"Buena Atención"}
						text={"Escuchamos tus dudas para ofrecerte lo mejor"}
						version={'mobile'}
					/>
				</div>
			</SHowWeWork>
			<SAbout>
				<ImageSection isFull={true}/>
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
			</SAbout>
			<SServices>
				<HeaderSection
					section={"Nuestros Servicios"}
					titles={["Servicios que ofrecemos"]}
					align={"left"}
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
			</SQuote>
			<SCTA>
				<CTAImage
					title={"¿Listo para comenzar a desarrollar tu idea?"}
					text={"Contactanos para que platiquemos y comencemos con tu proyecto"}
					button={{
						text: "Contactanos"
						}}
					isMobile={true}
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

			<Modal isOpened={modal.isOpened} toggle={modal.toggle}>
				<MenuPop/>
			</Modal>
		</SContainer>
	)
}

Mobile.propTypes = {

}

export default Mobile