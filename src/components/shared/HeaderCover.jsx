import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../themes/ClassicDark'

import IconLink from './IconLink'
import Navbar from './Navbar'
import Button from './Button'

const HeaderCover = ({title, socialLinks, button, image, handleMenuClick, author}) => {

	const {palette, font} = theme;

	const SContainer = styled.section`
		width: 100%;
		height: 100%;
		background-image: url(${image});
		background-size: cover;

		border-radius: 0px 0px 15px 15px;
		overflow: hidden;
		box-shadow: 0 3px 6px ${palette.boxShadow};
	`

	const SWrapper = styled.div`
		width: 100%;
		height: 100%;
		display: grid;
		padding: 16px;

		grid-template-rows: repeat(9, 1fr);
		grid-template-areas:
			"Navbar" "." "." "." "Title" "Title" "Title" "." "Author";
		row-gap: 20px;

		background-color: ${palette.boxShadow};
	`
	const SNavbar = styled(Navbar)`
		grid-area: Navbar;
	`
	const SAuthor = styled.div`
		display: flex;
		grid-area: Author;
		text-align: center;
		color: white;
		justify-content:center;
		align-items: flex-end;

		& > p {
			text-shadow: 0 0 2px ${palette.textShadow};
		}
	`
	const STitle = styled.article`
		grid-area: Title;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > h1 {
			font-size: 36px;
			font-weight: ${font.title.weight};
			color: white;
			margin-bottom: 16px; 
			text-align: center;
			text-shadow: 0 0 2px ${palette.textShadow};
		}

		& > div {
			display: flex;
			margin-top: 28px;
			
			& > *{
				margin-right: 10px;
			}

			& > *:nth-last-child(1){
				margin-right: 0px;
			}
		}
	`

	return (
		<SContainer>
			<SWrapper>
			<SNavbar handleOnClick={handleMenuClick}>
				<Navbar/>
			</SNavbar>
			<STitle>
				<h1>{title}</h1>
				{
					button ? <Button text={button.text} link={button.link} shadow={true}/> : null
				}
				<div>
					{
			            socialLinks.map((link, key) => (
			              <IconLink key={key} color="white" icon={link.icon} link={link.href} size={"28px"}/>
			             ))
	        		}
				</div>
			</STitle>
			<SAuthor>
				<p>{author}</p>
			</SAuthor>
			</SWrapper>
		</SContainer>
	)
}

HeaderCover.defaultProps = {
	image : "https://picsum.photos/500/650"
}

HeaderCover.propTypes = {

}

export default HeaderCover