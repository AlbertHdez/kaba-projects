import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Icon } from '@iconify/react'
import earthMinus from '@iconify/icons-mdi/earth-minus'

const IconLink = ({link, icon, size, color}) => {

	const SContainer = styled.a.attrs({
		href: link
	})`
		text-decoration: none;
		display: flex;
		align-items: center;
	`
	const SIcon = styled(Icon)`
		font-size: ${size};
		color: ${color};
	`

  return (
    <SContainer>
    	<SIcon icon={icon}/>
    </SContainer>
  )
}

IconLink.defaultProps = {
	link: "https://www.facebook.com/mariolife",
	icon: earthMinus,
	size: "24px",
	color: "black"
}

export default IconLink