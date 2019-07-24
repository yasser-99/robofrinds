import React, {Component} from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import {robots} from './robots';
import './App.css'
class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }
  //using this way of writing a function to be able to use "this" properly
  // otherwie "this" might revere to the event creater (in this case it reveres to the input!)
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});

  }
  render(){
    const filterdRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
      <div className='tc'>
        <h1 className='f1'>RoboFrinds</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filterdRobots}/>
        </Scroll>
      </div>

    );
  }
}
export default App;
