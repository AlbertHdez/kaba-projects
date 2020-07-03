import React from 'react'
import styled from 'styled-components'

import HeaderSection from './components/shared/HeaderSection'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: hsl(0, 0, 98);
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <Container>
      <HeaderSection align="left"/>
    </Container>
  );
}

export default App;
