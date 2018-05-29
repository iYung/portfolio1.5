import React, { Component } from 'react';
import { Segment, Modal } from 'semantic-ui-react'
import Axios from 'axios';

const Entry = props => { return (
  <Segment>
    <h3>{props.position} — {props.date}</h3>
    <p id="textSegment">{props.txt}</p>
  </Segment>
)}

class Education extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      educations: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/education')
      .then(res => {
        const educations = res.data.reverse();
        this.setState({ educations });
      });
  }
  
  render(){ return (
    <Segment.Group id="group">
      {this.state.educations.map(education =>
        <Entry key={education._id} position={education.name} date={education.date} txt={education.text}/>
      )}
    </Segment.Group>
  )}
}

class Edu extends Component {
  render(){ return (<Modal closeIcon={true} trigger={this.props.trigger}>
    <Modal.Header>Education</Modal.Header>
    <Education /> 
  </Modal>
  )}
}
export default Edu