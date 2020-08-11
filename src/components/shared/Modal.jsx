import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import theme from '../../themes/ClassicDark'

const modalContainer = document.querySelector('#modal-root')

const SContainer = styled.section`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;

	& > *:nth-last-child(1){
		z-index: 105;
	}
`
const SBackground = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 101;
	background-color: rgba(0,0,0,0.5);
`

const Modal = ({isOpened, toggle, ...props}) => {
	return(
		<React.Fragment>
			{
				isOpened ? 
					ReactDOM.createPortal(
						<SContainer>
							<SBackground onClick={toggle}/>
							{props.children}
						</SContainer>,
						modalContainer
					)
				: null
			}
		</React.Fragment>
	)
}

Modal.defaultProps = {
	isOpened: false
}

Modal.propTypes = {
	isOpened: PropTypes.bool
}

export default Modal