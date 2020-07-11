import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../themes/ClassicDark'


//Components
import Navbar from '../components/shared/Navbar'
import HeaderCard from '../components/shared/HeaderCard'
import HeaderSection from '../components/shared/HeaderSection'
import HowWeWork from '../components/Home/HowWeWork'

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
					<HeaderSection/>
					<section>
						<HowWeWork/>
						<HowWeWork/>
						<HowWeWork/>
						<HowWeWork/>
					</section>
				</SHWW>
			</SWrapper>
		</SContainer>
	)
}

Home.propTypes = {

}

export default Home