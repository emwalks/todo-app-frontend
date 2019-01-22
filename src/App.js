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
    this.deleteTask = this.deleteTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
  }

  addTask(task) {
    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task)
    this.setState({
      tasks: currentListOfTasks
    });
  }


  deleteTask(id) {
    let currentListOfTasks = this.state.tasks;
    let updatedListOfTasks = currentListOfTasks.filter(task => task.id != id)
    this.setState({
      tasks: updatedListOfTasks
    });
  }

  doneTask() {
    
    alert ("the doneTask function is running");
  
}


//this gives a default empty array of tasks initially
//then have a functioin that pushes the task into the array

render() {
  return (
    <div className="container">
      <Header />
      <TaskForm onAddTaskHandler={this.addTask} />
      <TaskCounter numberOfTasks={this.state.tasks.length} />
      <TaskList tasks={this.state.tasks}
        onDeleteTaskHandler={this.deleteTask}
        onDoneTaskHandler={this.doneTask} />
    </div>
  );
}
}

export default App;

//in html you would have had class= in react it's className
//the container div is introducing bootstrap into our React App

//the task list now is watching the state defined by constructor above
