import React from 'react';

class TaskCounter extends React.Component {

    render() {
        return (
            <p style={styles.counter}>You have {this.props.numberOfTasks} tasks left to do - get on it!</p>
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