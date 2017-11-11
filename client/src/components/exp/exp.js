import React, { Component } from 'react';
import { Segment, Modal } from 'semantic-ui-react'
import Axios from 'axios';

const Entry = props => { return (
  <Segment>
    <h3>{props.position} — {props.date}</h3>
    <p id="textSegment">{props.txt}</p>
  </Segment>
)}

class Experience extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      experiences: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/experience')
      .then(res => {
        const experiences = res.data;
        this.setState({ experiences });
      });
  }
  
  render(){ return (
    <Segment.Group id="group">
      {this.state.experiences.map(experience =>
        <Entry key={experience._id} position={experience.name} date={experience.date} txt={experience.text}/>
      )}
    </Segment.Group>
  )}
}

class Exp extends Component {
  render(){ return (<Modal closeIcon={true} trigger={this.props.trigger}>
    <Modal.Header>Experience</Modal.Header>
    <Experience /> 
  </Modal>
  )}
}
export default Exp