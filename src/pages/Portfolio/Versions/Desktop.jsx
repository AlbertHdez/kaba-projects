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
		row-gap: 120px;
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
	`
	const SPortfolio = styled.section`
		display: grid;
		width: 100%;
		max-width: 990px;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 24px;
		row-gap: 24px; 
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
				</SHeader>
				<SPortfolio>
					<Image/>
					<Image/>
					<Image/>
					<Image/>
					<Image/>
					<Image/>
					<Image/>
					<Image/>
					<Image/>
					<Image/>
				</SPortfolio>
				<CTAImage
					title={"¿Listo para comenzar a desarrollar tu idea?"}
					text={"Contactanos para que platiquemos y comencemos con tu proyecto"}
					button={{
						text: "Contactanos"
						}}
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