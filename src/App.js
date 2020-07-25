import React from 'react'
import styled from 'styled-components'


//Pages
import Home from './pages/Home/Home'

function App() {

  const [isModalOpened, setModalOpened] = React.useState(true)

  return (
    <Home/>
  );
}

export default App;
