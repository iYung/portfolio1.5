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
      return (<a href={"mailto:" + email} target="_blank"><Image spaced src="https://upload.wikimedia.org/wikipedia/commons/0/08/Ic_mail_outline_black_48px.svg" inline={true} size={"mini"} /></a>) 
    } else { 
      return ""
    }
  }
  
  checkLinkedIn(linkedIn){
    if (linkedIn !== ""){ 
      return (<a href={linkedIn} target="_blank"><Image spaced src="https://upload.wikimedia.org/wikipedia/commons/8/8f/LinkedIn_font_awesome.svg" inline={true} size={"mini"} /></a>) 
    } else { 
      return ""
    }
  }
  
  checkGithub(github){
    if (github !== ""){ 
      return (<a href={github} target="_blank"><Image spaced src="https://upload.wikimedia.org/wikipedia/commons/1/19/Feather-logos-github.svg" inline={true} size={"mini"} /></a>) 
    } else { 
      return ""
    }
  }
  
  render(){ 
    
    return (
      <Segment basic compact textAlign="center" id="content">
        {this.state.homes.map(home =>
          <div key={home._id}>
            <Segment id="header" compact>
              <p><Image bordered shape={"circular"} centered={true} size={"small"} src={home.image} alt="me"></Image></p>
              <p><Segment basic>
                <h2>{home.title}</h2>
                <p id="textSegment">{home.text}</p>
              </Segment>
              </p>
              <Menu inverted stackable fluid widths={4}>
                <Edu trigger={<Menu.Item><div textAlign="center">Education</div></Menu.Item>} />
                <Exp trigger={<Menu.Item textAlign="center">Experience</Menu.Item>} />
                <Projects trigger={<Menu.Item textAlign="center">Projects</Menu.Item>} />
                <Achievements trigger={<Menu.Item textAlign="center">Achievements</Menu.Item>} />
              </Menu>
            </Segment>
            <Segment basic textAlign="center">
              { this.checkEmail(home.email) }
              { this.checkLinkedIn(home.linkedIn) }
              { this.checkGithub(home.github) }
            </Segment>
          </div>
        )}
      </Segment>
    )
  }
}
export default Home