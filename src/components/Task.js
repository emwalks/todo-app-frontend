import React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.onDeleteClicked = this.onDeleteClicked.bind(this);
        this.onDoneClicked = this.onDoneClicked.bind(this);

    }

    onDeleteClicked() {

        this.props.onDeleteTaskHandler(this.props.taskId);

    };

    //use the prop taskID in the application of the prop onDeleteTaskHandler
    //taskId passed from tasklist
    //task array passed from App into tasklist - pulls out id
    //onDeleteTaskHandler passed into tasklist then task
    //grandparent-parent-child - cascading props to components
    //there are ways to do global state management in react e.g. Context API


    onDoneClicked() {
        this.props.onDoneTaskHandler(this.props.taskId);
    };

    render() {

        let taskStyle = {};
        if (this.props.taskStatus) {
            taskStyle = {
                textDecoration: "line-through"
            }
        }

        //this is react conditional formatting

        return (
            <div className="row" style={styles.taskRow}>

                <div className="col" style = {taskStyle}>
                    {this.props.taskDescription} 
                </div>
                <div className="col">
                    <button type="button" onClick={this.onDoneClicked} className="btn btn-info">Done</button>
                </div>
                <div className="col">
                    <button type="button" onClick={this.onDeleteClicked} className="btn btn-danger">Delete</button>
                </div>

            </div>

        );
    }
}

const styles = {
    taskRow: {
        paddingTop: "5px",
        paddingBottom: "5px",
        textAlign: "center"
    }
};


export default Task

//the Task code has a property (prop) that once the task description is passed to it it can render. Could be a string/boolen/number etc
//to style things differently depending on state you need to use conditional rendering