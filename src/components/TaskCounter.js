import React from 'react';

class TaskCounter extends React.Component {
   render(){
       return (
        <p style={styles.counter}>There are 4 tasks remaining</p>
       );  
   } 
}

const styles = {
    counter:{
        paddingTop : "5px",
        paddingBottom: "5px",
        textAlign: "center"
    }
};

export default TaskCounter