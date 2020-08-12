import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../themes/ClassicDark'

//Components
import Button from './Button'
import IconLink from './IconLink'
import facebookIcon from '@iconify/icons-mdi/facebook'
import facebookMessenger from '@iconify/icons-mdi/facebook-messenger'
import whatsappIcon from '@iconify/icons-mdi/whatsapp'
//Helpers

//Hooks

//Media


const HeaderCard = ({title, socialLinks, button, img, author}) =>{

  //Styles
  const SContainer = styled.div`
      height: 560px;
      background-color: #F8E8FC;
      border-radius: 15px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 3px 6px ${theme.palette.boxShadow};
  `
  const SImageBg = styled.img`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
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
      margin-bottom: 20px;
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
      <SImageBg src={img}/>
      <SWrapper>
        <SHeader>
          <h1>
            {title}
          </h1>
          {
            button ? 
              <Button text={button.text} shadow="true" link={button.link}/>
            : null
          }
        </SHeader>
        <SSocial>
          {
            socialLinks.map(link => (
              <IconLink color="white" icon={link.icon} link={link.href}/>
              ))
          }
        </SSocial>
        <SAuthor>
          <span>{author}</span>
        </SAuthor>
      </SWrapper>
    </SContainer>
  )
}
//PropTypes of HeaderCard
HeaderCard.propType = {
    title: PropTypes.string.isRequired,
    socialLinks: PropTypes.array
}

HeaderCard.defaultProps = {
  socialLinks:[
    {
      icon: facebookIcon,
      href: "https://facebook.com"
    }
  ],
  img: 'https://picsum.photos/1200/800'
}

export default HeaderCard
