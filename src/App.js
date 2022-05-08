import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';
//class App extends React.Component{
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Rishabh',
      id: 101
    }
  }
  render() {
    return (
    <>
    <h1>Hello This is class component</h1>
    <h2>My name is {this.state.name} and id is {this.state.id}</h2>
    <button onClick={
      function(){
      this.setState({name:'Rishabh Sharma'})
    }.bind(this)
    }>Update the name</button>
    </>
    )
  }
}

export default App;
