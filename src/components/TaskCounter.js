import React from 'react';

class TaskCounter extends React.Component {

    render() {
        return (
            <p style={styles.counter}>You have {this.props.numberOfTasks} task(s) left to do - get on it!</p>
        );
    }
}

const styles = {
    counter: {
        paddingTop: "5px",
        paddingBottom: "5px",
        textAlign: "center"
    }
};

export default TaskCounter

//may want to update counter based on taskStatus? if completed = true pass as prop numberofDoneTasks