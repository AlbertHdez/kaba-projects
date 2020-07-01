import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

//Components
import Button from './Button'
import IconLink from './IconLink'
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
  const SWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px;
    display: grid;
    grid-template: repeat(6, 1fr) / repeat(5, 1fr);
    grid-template-areas:
      ". . . . ."
      ". . . . ."
      ". Header Header Header ."
      ". Header Header Header ."
      ". Header Header Header ."
      "Social Social . Author Author";
    position: absolute;
    z-index: 4;
    background-color: rgba(0,0,0,0.3);
  `
  const SHeader =  styled.div`
    grid-area: Header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
      color: white;
      max-width: 400px;
      font-size: 40px;
      font-weight: 600;
      line-height: 60px;
      text-align: center;
      text-shadow: 0 0 5px rgba(0,0,0,0.2);
    }
  `
  const SSocial = styled.div`
    grid-area: Social;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    & > * {
      color: white;
      margin-right: 10px;
    }

    & > *:nth-last-child(1){
      margin-right: 0px;
    }
  `
  const SAuthor = styled.div`
    grid-area: Author;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    & > * {
      color: white;
    }
  `

  return(
    <SContainer>
      <SImageBg src='https://images.pexels.com/photos/1181275/pexels-photo-1181275.jpeg'/>
      <SWrapper>
        <SHeader>
          <h1>
            Convirtiendo ideas en realidad
          </h1>
          <Button text="Contactanos"/>
        </SHeader>
        <SSocial>
          <IconLink color="white"/>
          <IconLink color="white"/>
          <IconLink color="white"/>
        </SSocial>
        <SAuthor>
          <span>Pon los creditos del autor wey</span>
        </SAuthor>
      </SWrapper>
    </SContainer>
  )
}
//PropTypes of HeaderCard
HeaderCard.propType = {
    //prop: PropTypes.type.value
}

export default HeaderCard
