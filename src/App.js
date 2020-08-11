import React from 'react'
import styled from 'styled-components'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

//Pages
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'

function App() {
  return (
    <Router>
    	<Switch>
    		<Route exact path="/Portfolio" component={Portfolio}/>
    		<Route exact path="/" component={Home}/>
    	</Switch>
    </Router>
  );
}

export default App;
