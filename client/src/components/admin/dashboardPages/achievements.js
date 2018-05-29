import React, {Component} from 'react';
import { Segment, Form, Label, Menu, Icon } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class Achievement extends Component { 
  
  update(){
    const name = document.getElementById(this.props.identifier + 'name').value;
    const date = document.getElementById(this.props.identifier + 'date').value;
    const txt = document.getElementById(this.props.identifier + 'txt').value;
    Axios.put('/api/achievement/' + this.props.identifier, Qs.stringify({ 'name': name, 'date': date, 'text': txt, 'userPass': sessionStorage.getItem('pass') }))
      .then(res => {
        alert(res.data.message)
      });
  }
  
  del(){
        Axios({method: 'delete', url: '/api/achievement/' + this.props.identifier, data: {userPass: sessionStorage.getItem('pass')}}).then(res => {
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
                <label>Month</label>
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

class Achievements extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            achievements: [],
            years: []
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getYears();
    }
    
    newPost(){
        Axios.post('/api/achievement/new/'+ this.state.activeItem,  Qs.stringify( {'userPass': sessionStorage.getItem('pass')})).then(res => {
            this.getPosts();
        });
    }
    
    getPosts(){
        Axios.get('/api/achievements/' + this.state.activeItem).then(res => {
            const achievements = res.data.reverse();
            this.setState({ achievements: achievements });
        });
    }
    
    getYears = () => {
        Axios.get('/api/achievementyears/').then(res => {
            this.setState({ years: res.data, activeItem: String(res.data.sort((a, b) => b - a)[0])}, this.getPosts);
        });
    }
    
    addYear = () => {
        let newYear = prompt("Please enter the new year below:");
        if (newYear === "" || !(/^[0-9]+$/.test(newYear))){
            return alert("Please enter a year.");
        } else if (newYear === null) {
            return;
        } else {
            Axios.post('/api/achievement/new/'+ newYear, Qs.stringify({ 'userPass': sessionStorage.getItem('pass') })).then(res => {
                this.getYears();
            });
        }
    }
    
    handleItemClick = (e, { name }) => {this.setState({ activeItem: name }, this.getPosts)}
    
    render(){ return(
        <Segment.Group>
            <Nav activeItem={'achievements'}/>
            <Segment id="yearMenu">
                <Menu pointing secondary stackable>
                    <Menu.Item name='add' onClick={this.addYear}><Icon name='plus'/></Menu.Item>
                    {this.state.years.concat().sort((a, b) => b - a).map(year =>
                        <Menu.Item key={year} name={year} active={this.state.activeItem === String(year)} onClick={this.handleItemClick}/>
                    )}
                </Menu>
            </Segment>
            {this.state.achievements.map(achievement =>
                <Achievement key={achievement._id} identifier={achievement._id} name={achievement.name} date={achievement.date} txt={achievement.text} cb={this.getPosts}/>
            )}
            <Segment>
                <Label onClick={() => this.newPost()}>New Entry</Label>
            </Segment>
        </Segment.Group>
    )}
}
export default Achievements