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
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: rgba(0,0,0,0.5);
`

const Modal = ({isOpened, toggle, ...props}) => {
	return(
		<React.Fragment>
			{
				isOpened ? 
					ReactDOM.createPortal(
						<SContainer onClick={toggle}>{props.children}</SContainer>,
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