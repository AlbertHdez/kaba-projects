import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../themes/ClassicDark'

//Components
import Navbar from '../../../components/shared/Navbar'
import HeaderCard from '../../../components/shared/HeaderCard'
import CTAImage from '../../../components/shared/CTAImage'
import Footer from '../../../components/shared/Footer'
import Image from '../../../components/Portfolio/Image'

//Media
import facebookIcon from '@iconify/icons-mdi/facebook'
import linkedinIcon from '@iconify/icons-mdi/linkedin'
import twitterIcon from '@iconify/icons-mdi/twitter'
import instagramIcon from '@iconify/icons-mdi/instagram'
import HeaderImage from '../../../media/images/desktop-portfolio.jpg'
import CtaImage from '../../../media/images/cta-desktop.jpg'

import images from '../../../media/images/portfolio/images'

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
	const SFooter = styled.section`
		width: 100%;
		max-width: 990px;
		margin-top: 50px;
	`
	const SPortfolio = styled.section`
		display: grid;
		width: 100%;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 10px;
		row-gap: 10px; 
		margin: 100px 0px;
	`
	const SSpace = styled.div`
		width: 100%;
		background-color: ${palette.containerLight};

		&:nth-child(odd){
			height: 400px;
		}
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
						author = {"Photo by Amélie Mourichon on Unsplash"}
					/>
				</SHeader>
				<SPortfolio>
					{
						images.map((image, key)=> (
							<Image
								key={key} 
								img={image}
							/>
						))
					}
				</SPortfolio>
				<CTAImage
					title={"¿Listo para comenzar a desarrollar tu idea?"}
					text={"Contactanos para que platiquemos y comencemos con tu proyecto"}
					button={{
						text: "Contactanos"
						}}
					img = {CtaImage}
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
			</SWrapper>
		</SContainer>
	)
}

Desktop.propTypes = {

}

export default Desktop