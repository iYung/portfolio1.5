import React, {Component} from 'react';
import { Segment, Form, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class BackgroundData extends Component { 
  
    update(){
        const image = document.getElementById("backgroundImage").value;
        Axios.put('/api/background', Qs.stringify({ 'backgroundImg': image, 'userPass': sessionStorage.getItem('pass') }))
            .then(res => {
            alert(res.data.message)
        });
    }
  
    del(){
        Axios({method: 'delete', url: '/api/background', data: {userPass: sessionStorage.getItem('pass')}}).then(res => {
            this.props.cb();
        });
    }
  
  render(){ return(
    <Segment>
        <Form>
            <Form.Field>
                <label>Background Image URL</label>
                <input id={"backgroundImage"} defaultValue={this.props.image}/>
            </Form.Field>
            <Label onClick={() => this.update()}>Update</Label><Label onClick={() => this.del(this.props.cb)}>Delete</Label>
        </Form>
    </Segment>
    )}}

class Background extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            backgrounds: []
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getPosts();
    }
    
    newPost(){
        Axios.post('/api/background', Qs.stringify({ 'userPass': sessionStorage.getItem('pass') })).then(res => {
            this.getPosts();
        });
    }
    
    getPosts(){
        Axios.get('/api/background').then(res => {
            const backgrounds = res.data;
            this.setState({ backgrounds: backgrounds });
        });
    }
    
    render(){
        let newPostBar = <Segment><Label onClick={() => this.newPost()}>New Entry</Label></Segment>;
        return(
            <Segment.Group>
                <Nav activeItem={'background'}/>
                {   
                    this.state.backgrounds.map(background => {
                        newPostBar = null;
                        return <BackgroundData key={background._id} image={background.backgroundImg} cb={this.getPosts}/>
                    }
                )}
                {newPostBar}
            </Segment.Group>
        )}
}
export default Background