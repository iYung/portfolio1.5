import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Axios from 'axios';
import { Container } from 'semantic-ui-react'
import './App.css'

import Home from './components/home'
import Admin from './components/admin/admin'

class App extends Component {
  
  componentDidMount() {
    Axios.get('/api/background')
      .then(res => {
        res.data.forEach(function(background) {
         document.getElementById("background").style.background = "url(" + background.backgroundImg + ")";
         document.getElementById("background").style.backgroundSize = "cover";
         document.getElementById("background").style.backgroundAttachment = "fixed";
        });
      });
  }
  
  render(){
    
    return(
      <div>
        <Router>
          <div>
            <Container text id="contentBox">
              <Route exact path="/" component={Home}/>
              <Route path="/admin" component={Admin}/>
            </Container>
          </div>
        </Router>
      </div>
    )
  }
}
export default App