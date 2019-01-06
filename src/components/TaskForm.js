import React from 'react';

class TaskForm extends React.Component {
   render(){
       return (
//
//        <form id="form" action="">
//            <input type="text" placeholder="You got this!" name="task"> <button type ="submit" class="btn btn-warning">Add</button>
//        </form>

        <p style={styles.form}>This will be the form</p>



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