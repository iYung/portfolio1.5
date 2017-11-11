import React, {Component} from 'react';
import { Segment, Form, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class UserData extends Component { 
  
  update(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    Axios.put('/api/user', Qs.stringify({ 'username': username, 'password': password, 'userPass': sessionStorage.getItem('pass') }))
      .then(res => {
        alert(res.data.message)
      });
  }
  
  render(){ return(
    <Segment>
        <Form>
            <Form.Field>
                <label>Username</label>
                <input id={"username"} defaultValue={this.props.username}/>
            </Form.Field>
            <Form.Field>
                <label>New Password</label>
                <input id={"password"}/>
            </Form.Field>
            <Label onClick={() => this.update()}>Update</Label>
        </Form>
    </Segment>
    )}}

class User extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getPosts();
    }
    
    getPosts(){
        Axios.get('/api/user').then(res => {
            const users = res.data;
            this.setState({ users: users });
        });
    }
    
    render(){
        return(
            <Segment.Group>
                <Nav activeItem={'user'}/>
                    <UserData key={this.state.users._id} username={this.state.users.username}/>
            </Segment.Group>
        )}
}
export default User