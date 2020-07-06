import React from 'react'
import styled from 'styled-components'

import CTAImage from './components/shared/CTAImage'

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
      <CTAImage/>
    </Container>
  );
}

export default App;
