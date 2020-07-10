import React from 'react'
import styled from 'styled-components'

import ServiceItem from './components/Home/ServiceItem'


import briefcaseIcon from '@iconify/icons-twemoji/briefcase'
import theme from './themes/ClassicDark'
const {palette} = theme


const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${palette.containerDark};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

`

function App() {
  return (
    <Container>
        <ServiceItem />
    </Container>
  );
}

export default App;
