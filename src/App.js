import React from 'react'
import styled from 'styled-components'

import ImageSection from './components/shared/ImageSection'

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
      <ImageSection/>
    </Container>
  );
}

export default App;
