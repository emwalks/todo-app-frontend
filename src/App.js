import React, { Component } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';
import TasksService from './service/tasks';

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

  async componentDidMount() {
    const tasks = await TasksService.getTasks();
    this.setState({tasks: tasks});
 }

 //this says when the component mounts run this piece of code
 //gets tasks from db and sets the tasks into state

  async addTask(task) {

    const response = await TasksService.saveTask(task);

    task.TaskId = response.insertId;

    let currentListOfTasks = this.state.tasks;
    currentListOfTasks.push(task)
    this.setState({
      tasks: currentListOfTasks
    });
  }


  async deleteTask(id) {

    const response = await TasksService.deleteTask(id);


    let currentListOfTasks = this.state.tasks;
    let updatedListOfTasks = currentListOfTasks.filter(task => task.TaskId !== id)
    this.setState({
      tasks: updatedListOfTasks
    });
  }

  async doneTask(id) {

    const response = await TasksService.doneTask(id);
    


    let currentListOfTasks = this.state.tasks;
    let taskToMarkAsDone = currentListOfTasks.find(task => task.TaskId === id)
    taskToMarkAsDone.Completed = true
    this.setState({
      tasks: currentListOfTasks
    });
  }

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
