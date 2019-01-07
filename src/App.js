import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(task) {
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task)
    this.setState({
    tasks:currentListOfTasks
      });
  }

  //this gives a default empty array of tasks initially
  //then have a functioin that pushes the task into the array
  render() {
    return (
      <div className="container">
      <Header /> 
      <TaskForm onAddTaskHandler = {this.addTask} />
      <TaskCounter />
      <TaskList tasks={this.state.tasks} /> 
      </div>
    );
  }
}

export default App;

//in html you would have had class= in react it's className
//the container div is introducing bootstrap into our React App

//the task list now is watching the state defined by constructor above
