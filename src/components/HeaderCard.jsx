import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//Components

//Helpers

//Hooks

//Media


const HeaderCard = () =>{

  //Styles
  const SContainer = styled.div`
      height: 560px;
      background-color: #F8E8FC;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
  `
  const SImageBg = styled.img`
    width: 120%;
    position: absolute;
    top: -10%;
    left: -10%;
    z-index: 2;
  `

  return(
    <SContainer>
      <SImageBg src='https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg'/>
    </SContainer>
  )
}
//PropTypes of HeaderCard
HeaderCard.propType = {
    //prop: PropTypes.type.value
}

export default HeaderCard
