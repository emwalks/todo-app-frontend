import React from 'react';

class TaskForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
                taskDescription: ""
        };

//      this is the event binding function
        this.onAddClicked = this.onAddClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);
    }

    //this function fires when Add button is clicked
    onAddClicked() {
            alert(this.state.taskDescription);
    }
    //this function fires when text box is changed
    onTaskTextFieldUpdated(event) {
        const description = event.target.value;

        this.setState ({
            taskDescription: description
        });
    }

   render() {
       return (
            <div className="row" style={styles.form}>
                <div className="col">
                    <input type="text" placeholder="You got this!" value={this.state.taskDescription} onChange={this.onTaskTextFieldUpdated} /> 
                </div>
                <div className="col">
                    <button type ="submit" onClick={this.onAddClicked} class="btn btn-warning">Add</button>                 
                </div>
            </div>
       );  
   } 
}

const styles = {
    form:{
        paddingTop : "5px",
        paddingBottom: "5px",
        textAlign: "center"
    }
};

export default TaskForm