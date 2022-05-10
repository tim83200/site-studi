import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import contacts from './contactsMui.js'
import NavBarMui from './navBarMui.js'
import FooterMui from './footerMui'
import prestationsMui from './prestationsMui'
import GalerieMui from './galerieMui'
import AccueilMui from './accueilMui'
import './App.css'
import TestMui from './testMui'

const App = () => {
    return (
      <div className="App">
          <Router>
              <NavBarMui/> 
                  <Route path="/" exact component={AccueilMui}/>
                  <Route path="/Accueil" exact component={AccueilMui}/>
                  <Route path="/Galerie" exact component={GalerieMui}/>
                  <Route path="/prestations" exact component={prestationsMui}/>
                  <Route path="/contacts" exact component={contacts}/> 
                  <Route path="/test" exact component={TestMui}/> 
          </Router>
          <FooterMui /> 
      </div>
    )
}   

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
