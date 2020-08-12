import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../themes/ClassicDark'

//Components
import HeaderCover from '../../../components/shared/HeaderCover'
import MobileImage from '../../../components/Portfolio/MobileImage'
import CTAImage from '../../../components/shared/CTAImage'
import Footer from '../../../components/shared/Footer'
import Modal from '../../../components/shared/Modal'
import MenuPop from '../../../components/shared/MenuPop'

//Media
import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'
import instagramIcon from '@iconify/icons-mdi/instagram'
import HeaderImage from '../../../media/images/mobile-portfolio.jpg'
import CtaImage from '../../../media/images/cta-mobile.jpg'

import images from '../../../media/images/portfolio/images'

const Mobile = ({modal}) => {

	const {palette} = theme;

	const SContainer = styled.section`
		display: grid;
		grid-template-rows: calc(100vh + 30px) auto 100vh;
		background-color: ${palette.containerDark};
	`
	const SGallery = styled.section`
		display: grid;
		row-gap: 20px;
		padding: 0 20px;
		margin: 100px 0px;
	`
	const SFooter = styled.footer`
		padding:36px 16px;
	`

	return (
		<SContainer>
			<HeaderCover
					image = {HeaderImage}
					author = {"Photo by You X Ventures on Unsplash"}
					title = {"Convirtiendo ideas en realidad"}
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
				<SGallery>
					{
						images.map((image, key)=> (
							<MobileImage
								key={key} 
								img={image}
							/>
						))
					}
				</SGallery>
				<CTAImage
					title={"¿Listo para comenzar a desarrollar tu idea?"}
					text={"Contactanos para que platiquemos y comencemos con tu proyecto"}
					button={{
						text: "Contactanos"
						}}
					isMobile={true}
					img={CtaImage}
				/>
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