import React, {Component} from 'react';
import { Segment, Form, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class HomeData extends Component { 
  
    update(){
        const image = document.getElementById("homeImage").value;
        const title = document.getElementById("homeTitle").value;
        const txt = document.getElementById("homeTxt").value;
        Axios.put('/api/home', Qs.stringify({ 'image': image, 'title': title, 'text': txt, 'userPass': sessionStorage.getItem('pass') }))
            .then(res => {
            alert(res.data.message)
        });
    }
  
    del(){
        Axios({method: 'delete', url: '/api/home', data: {userPass: sessionStorage.getItem('pass')}}).then(res => {
            this.props.cb();
        });
    }
  
  render(){ return(
    <Segment>
        <Form>
            <Form.Field>
                <label>Image URL</label>
                <input id={"homeImage"} defaultValue={this.props.image}/>
            </Form.Field>
            <Form.Field>
                <label>Title</label>
                <input id={"homeTitle"} defaultValue={this.props.title}/>
            </Form.Field>
            <Form.Field>
                <label>Text</label>
                <textarea id={"homeTxt"} defaultValue={this.props.txt}/>
            </Form.Field>
            <Label onClick={() => this.update()}>Update</Label><Label onClick={() => this.del(this.props.cb)}>Delete</Label>
        </Form>
    </Segment>
    )}}

class Home extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            homes: []
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getPosts();
    }
    
    newPost(){
        Axios.post('/api/home', Qs.stringify({ 'userPass': sessionStorage.getItem('pass') })).then(res => {
            this.getPosts();
        });
    }
    
    getPosts(){
        Axios.get('/api/home').then(res => {
            const homes = res.data;
            this.setState({ homes: homes });
        });
    }
    
    render(){
        let newPostBar = <Segment><Label onClick={() => this.newPost()}>New Entry</Label></Segment>;
        return(
            <Segment.Group>
                <Nav activeItem={'home'}/>
                {   
                    this.state.homes.map(home => {
                        newPostBar = null;
                        return <HomeData key={home._id} image={home.image} title={home.title} txt={home.text} cb={this.getPosts}/>
                    }
                )}
                {newPostBar}
            </Segment.Group>
        )}
}
export default Home