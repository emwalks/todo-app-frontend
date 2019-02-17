import React from 'react';

import Task from './Task';

class TaskList extends React.Component {
    render() {

        return (
            <div>
                {

                    this.props.tasks.map((task, i) =>
                        <Task TaskId = {task.TaskId} taskDescription={task.Description} key={i}
                            TaskId={task.TaskId}
                            taskStatus={task.Completed}
                            onDeleteTaskHandler={this.props.onDeleteTaskHandler}
                            onDoneTaskHandler={this.props.onDoneTaskHandler}
                        />
                    )
                }
            </div>
        );

    }
}

export default TaskList;

//here tasklist is just the conduit for the onDeleteTaskHandler and OnDoneTaskHandler props into Task