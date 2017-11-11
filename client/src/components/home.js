import React, { Component } from 'react';
import { Image, Menu, Segment } from 'semantic-ui-react'
import Axios from 'axios';
import './home.css'
import Projects from './projects/projects'
import Achievements from './achievements/achievements'
import Edu from './edu/edu'
import Exp from './exp/exp'

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/home')
      .then(res => {
        const homes = res.data;
        this.setState({ homes });
      });
  }
  
  checkEmail(email){
    if (email !== ""){ 
      return (<a href={"mailto:" + email} target="_blank"><Image spaced src="http://astridsofficial.com/wp-content/themes/artist-lyric/img/astrid_signup.png" inline={true} size={"mini"} /></a>) 
    } else { 
      return ""
    }
  }
  
  checkLinkedIn(linkedIn){
    if (linkedIn !== ""){ 
      return (<a href={linkedIn} target="_blank"><Image spaced src="http://pngimages.net/sites/default/files/linkedin-logo-png-image-75824.png" inline={true} size={"mini"} /></a>) 
    } else { 
      return ""
    }
  }
  
  checkGithub(github){
    if (github !== ""){ 
      return (<a href={github} target="_blank"><Image spaced src="https://image.flaticon.com/icons/svg/37/37819.svg" inline={true} size={"mini"} /></a>) 
    } else { 
      return ""
    }
  }
  
  render(){ 
    
    return (
      <div id="content">
        {this.state.homes.map(home =>
          <div key={home._id}>
            <Segment id="header">
              <p><Image bordered shape={"circular"} centered={true} size={"small"} src={home.image} alt="me"></Image></p>
              <p><Segment basic>
                <h2>{home.title}</h2>
                <p id="textSegment">{home.text}</p>
              </Segment>
              </p>
              <Menu inverted compact>
                <Edu trigger={<Menu.Item>Education</Menu.Item>} />
                <Exp trigger={<Menu.Item>Experience</Menu.Item>} />
                <Projects trigger={<Menu.Item>Projects</Menu.Item>} />
                <Achievements trigger={<Menu.Item>Achievements</Menu.Item>} />
              </Menu>
            </Segment>
            <Segment basic textAlign="center">
              { this.checkEmail(home.email) }
              { this.checkLinkedIn(home.linkedIn) }
              { this.checkGithub(home.github) }
            </Segment>
          </div>
        )}
      </div>
    )
  }
}
export default Home