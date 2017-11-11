import React, {Component} from 'react';
import { Segment, Form, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class Post extends Component { 
  
  update(){
    const name = document.getElementById(this.props.identifier + 'name').value;
    const date = document.getElementById(this.props.identifier + 'date').value;
    const txt = document.getElementById(this.props.identifier + 'txt').value;
    Axios.put('/api/experience/' + this.props.identifier, Qs.stringify({ 'name': name, 'date': date, 'text': txt, 'userPass': sessionStorage.getItem('pass') }))
      .then(res => {
          alert(res.data.message)
      });
  }
  
  del(){
        Axios({method: 'delete', url: '/api/experience/' + this.props.identifier, data: {userPass: sessionStorage.getItem('pass')}}).then(res => {
            this.props.cb();
        });
    }
  
  render(){ return(
    <Segment>
        <Form>
            <Form.Field>
                <label>Name</label>
                <input id={this.props.identifier + "name"} defaultValue={this.props.name}/>
            </Form.Field>
            <Form.Field>
                <label>Time Period</label>
                <input id={this.props.identifier + "date"} defaultValue={this.props.date}/>
            </Form.Field>
            <Form.Field>
                <label>Text</label>
                <textarea id={this.props.identifier + "txt"} defaultValue={this.props.txt}/>
            </Form.Field>
            <Label onClick={() => this.update()}>Update</Label><Label onClick={() => this.del(this.props.cb)}>Delete</Label>
        </Form>
    </Segment>
    )}}

class Experience extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getPosts();
    }
    
    newPost(){
        Axios.post('/api/experience/', Qs.stringify({ 'userPass': sessionStorage.getItem('pass') })).then(res => {
            this.getPosts();
        });
    }
    
    getPosts(){
        Axios.get('/api/experience/').then(res => {
            const experiences = res.data;
            this.setState({ experiences: experiences });
        });
    }
    
    handleItemClick = (e, { name }) => {this.setState({ activeItem: name }, this.getPosts)}
    
    render(){ return(
        <Segment.Group>
            <Nav activeItem={'exp'}/>
            {this.state.experiences.map(experience =>
                <Post key={experience._id} identifier={experience._id} name={experience.name} date={experience.date} txt={experience.text} cb={this.getPosts}/>
            )}
            <Segment>
                <Label onClick={() => this.newPost()}>New Entry</Label>
            </Segment>
        </Segment.Group>
    )}
}
export default Experience