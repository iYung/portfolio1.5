import React, {Component} from 'react';
import { Form, Segment, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Dashboard from './dashboard'

class Login extends Component {
  constructor(){
    super();
    this.state = {hasAdmin: false};
    this.login = this.login.bind(this);
  }
  
  login(){
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    Axios.post('/api/login', Qs.stringify({ 'username': username, 'password': password }))
      .then(res => {
        if (res.data.success) {
          sessionStorage.setItem('user', username);
          sessionStorage.setItem('pass', password);
          this.props.onclick();
        } else {
          alert("Login failed!");
        }
      });
  }
  
  createUser = () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    Axios.post('/api/user', Qs.stringify({ 'username': username, 'password': password }))
      .then(res => {
        if (res.data.success) {
          sessionStorage.setItem('user', username);
          sessionStorage.setItem('pass', password);
          this.props.onclick();
        } else {
          alert("User creation failed!");
        }
      });
  }
  
  checkUser = () => {
    Axios.get('/api/usercreated')
      .then(res => {
        this.setState({hasAdmin: res.data.userCreated})
      });
  }
  
  enter = (e) => {
    if (e.which === 13) {
      this.login();
    }
  }
  
  render(){
    this.checkUser();
    let button = <Label onClick={this.createUser}>Register</Label>;
    if (this.state.hasAdmin) {
      button = <Label onClick={this.login}>Login</Label>;
    }
    return(
      <div>
        <Segment.Group>
          <Segment textAlign={"center"}>
            <h2>Log In</h2>
          </Segment>
          <Segment textAlign={"left"}>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input id={"loginUsername"} placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" id={"loginPassword"} placeholder='Password' onKeyPress={this.enter}/>
            </Form.Field>
            {button}
          </Form>
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

class Admin extends Component { 
  constructor(){
    super();
    this.state = {loggedIn: false};
  }
  
  login = () => {
    this.setState({loggedIn: true})
  }
  
  render(){
    if (this.state.loggedIn) {
      return(<Dashboard/>)
    } else {
      return(<Login onclick={this.login}/>)
    }
  }
}
export default Admin