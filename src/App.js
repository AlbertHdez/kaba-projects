import React from 'react'
import styled from 'styled-components'

import Button from './components/shared/Button'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: hsl(0, 0, 98);
`

function App() {
  return (
    <Container>
      <Button text="Vamos a comenzar"/>
    </Container>
  );
}

export default App;
