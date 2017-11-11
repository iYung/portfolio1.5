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
            const achievements = res.data;
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
        <Modal trigger={this.props.trigger}>
            <Segment.Group>
            <Segment textAlign={"center"}>
                <h2>Achievements</h2>
                <Menu pointing secondary stackable>
                    {this.state.years.concat().sort((a, b) => b - a).map(year =>
                        <Menu.Item key={year} name={year} active={this.state.activeItem === String(year)} onClick={this.handleItemClick}/>
                    )}
                </Menu>
            </Segment>
            {this.state.achievements.map(achievement =>
                <Achievement key={achievement._id} identifier={achievement._id} name={achievement.name} date={achievement.date} txt={achievement.text}/>
            )}
        </Segment.Group>
        </Modal>
    )}
}
export default Achievements