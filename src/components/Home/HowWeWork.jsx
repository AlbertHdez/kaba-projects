import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { Icon } from '@iconify/react'
import earthMinus from '@iconify/icons-mdi/earth-minus'

const HowWeWork = ({icon}) => {

	const SContainer = styled.div`
		width: 200px;
		display: grid;
		row-gap: 14px;
		justify-items: center;
	`
	const SIconWrapper = styled.div`
		width: 90px;
		height: 90px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #9D0FC7;
		border-radius: 10px;
	`

	const SIcon = styled(Icon)`
		font-size: 60px;
		color: white;
	`
	const SArticle = styled.article`
		display: grid;
		justify-items: center;
		text-align: center;

		& > h4 {
			font-size: 16px;
			font-weight: 600;
		}

		& > p {
			font-size: 14px;
		}
	`

	return (
		<SContainer>
			<SIconWrapper>
				<SIcon icon={icon}/>
			</SIconWrapper>
			<SArticle>
				<h4>Trabajos Remotos</h4>
				<p>No tenemos fronteras para estar a tu servicio</p>
			</SArticle>
		</SContainer>
	)
}

HowWeWork.defaultProps = {
	icon: earthMinus
}

HowWeWork.propTypes = {
	icon: PropTypes.object
}

export default HowWeWork;