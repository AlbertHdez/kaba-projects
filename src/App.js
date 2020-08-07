import React from 'react'
import styled from 'styled-components'


//Pages
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {

  const [isModalOpened, setModalOpened] = React.useState(true)

  return (
    <Portfolio/>
  );
}

export default App;
