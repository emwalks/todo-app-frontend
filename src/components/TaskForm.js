import React from 'react';

class TaskForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskDescription: ""
        };

        //this is the event binding function
        this.onAddClicked = this.onAddClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);
    }

    //this function fires when Add button is clicked
    onAddClicked() {

        const taskToBeAdded = {
            
            Description: this.state.taskDescription,
            Completed: false
        };

        this.props.onAddTaskHandler(taskToBeAdded);

        // this clears the text box:         
        this.setState({
            taskDescription: ""
        });
    }

    //this function fires when text box is changed
    onTaskTextFieldUpdated(event) {
        const description = event.target.value;

        this.setState({
            taskDescription: description
        });
    }

    render() {
        return (
            <div className="row" style={styles.form}>
                <div className="col" style={styles.taskInputCol}>
                    <input type="text" placeholder="You got this!" value={this.state.taskDescription} onChange={this.onTaskTextFieldUpdated} />
                </div>
                <div className="col" style={styles.addButtonCol}>
                    <button type="submit" onClick={this.onAddClicked} className="btn btn-warning">Add</button>
                </div>
            </div>
        );
    }
}

const styles = {
    form: {
        paddingTop: "5px",
        paddingBottom: "5px",
        textAlign: "center"
    },
    taskInputCol: {
        textAlign: "right"
    },
    addButtonCol: {
        //textAlign : "left"
    }

};

export default TaskForm