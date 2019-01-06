import React, { Component } from 'react';

import Header from './components/Header';

import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header /> 
      <TaskForm />
      <TaskCounter />
      <TaskList />
      </div>
    );
  }
}

export default App;

//in html you would have had class= in react it's className
//the container div is introducing bootstrap into our React App
