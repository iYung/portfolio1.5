import React, {Component} from 'react';
import { Segment, Menu, Modal } from 'semantic-ui-react'
import Axios from 'axios';

const Achievement = props => { return (
  <Segment>
    <h3>{props.name} — {props.date}</h3>
    <p id="textSegment">{props.txt}</p>
  </Segment>)
}

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
    
    handleItemClick = (e, { name }) => {this.setState({ activeItem: name }, this.getPosts)}
    
    render(){ return(
        <Modal closeIcon={true} trigger={this.props.trigger}>
            <Modal.Header>Achievements</Modal.Header>
            <Segment.Group id="group">
            <Segment textAlign={"center"}>
                <Menu pointing secondary stackable>
                    {this.state.years.concat().sort((a, b) => b - a).map(year =>
                        <Menu.Item key={year} name={year} active={this.state.activeItem === String(year)} onClick={this.handleItemClick}/>
                    )}
                </Menu>
            </Segment>
            <Segment.Group id="group">
            {this.state.achievements.map(achievement =>
                <Achievement key={achievement._id} identifier={achievement._id} name={achievement.name} date={achievement.date} txt={achievement.text}/>
            )}
            </Segment.Group>
        </Segment.Group>
        </Modal>
    )}
}
export default Achievements