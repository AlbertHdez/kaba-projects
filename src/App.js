import React from 'react'
import styled from 'styled-components';

import HeaderCard from './components/shared/HeaderCard'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: hsl(0, 0, 98);
`

function App() {
  return (
    <Container>
      <HeaderCard/>
    </Container>
  );
}

export default App;
