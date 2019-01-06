import React from 'react';

class Task extends React.Component {
   render(){
       return (
            <div className="row" style={styles.taskRow}>

                <div className="col">
                    {this.props.taskDescription}
                </div>
                <div className="col">
                <button type="button" class="btn btn-info">Done</button>
                </div>
                <div className="col">
                <button type="button" class="btn btn-danger">Delete</button>
                </div>

            </div>



       );  
   } 
}

const styles = {
    taskRow:{
        paddingTop : "5px",
        paddingBottom: "5px",
        textAlign: "center"
    }
};

export default Task

//the Task code has a property (prop) that once the task description is passed to it it can render. Could be a string/boolen/number etc