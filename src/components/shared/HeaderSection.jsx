import React from 'react'
import styled from 'styled-components'

import theme from '../../themes/ClassicDark'

const HeaderSection = ({align, titles, section, ...props}) => {

	const {font, palette} = theme

	const SContainer = styled.article`
		max-width: ${align === "center" ? "700px" : align === "left" ? "auto": "none"};
		display: grid;
		row-gap: 12px;
		justify-items: ${align === "center" ? "center" : align === "left" ? "start": "none"};

		& > *{
			text-align: ${align === "center" ? "center" : align === "left" ? "left": "none"};
		}
	`
	const SChip = styled.p`
		width: fit-content;
		height: fit-content;
		padding: 4px 8px;
		background-color: ${palette.primary};
		font-size: ${font.details.size};
		font-weight: 500;
		color: ${palette.text};
		border-radius: 5px;
		box-shadow: 0 1px 2px ${palette.boxShadow};
	`
	const STitle = styled.h2`
		font-size: ${font.subtitle.size};
		font-weight: ${font.subtitle.weight};
		color: ${palette.text}
	`
	const SContent = styled.div`
		display: grid;
		row-gap: 20px;
		& > p {
			font-size: ${font.subtext.size};
			color: ${palette.text}
		}
	`

  return (
    <SContainer>
    	<SChip>{section}</SChip>
    	<STitle>
    		{
    			titles.map((title, key) => <React.Fragment key={key}>{title}<br/></React.Fragment>)
    		}
    	</STitle>
    	<SContent>
    		{props.children || (<p>children is here</p>)}
    	</SContent>
    </SContainer>
  )
}

HeaderSection.defaultProps = {
	align: "center",
	titles: ["title"],
	section: "section"
}

export default HeaderSection;