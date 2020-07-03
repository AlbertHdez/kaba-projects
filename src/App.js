import React from 'react'
import styled from 'styled-components'

import HowWeWork from './components/Home/HowWeWork'
import worldMap from '@iconify/icons-emojione-monotone/world-map'

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
      <HowWeWork icon={worldMap} version={"mobile"} title={"A title"} text="Just a simple text"/>
    </Container>
  );
}

export default App;
