import React from 'react';

import Task from './Task';

class TaskList extends React.Component {
    render() {

        return (
            <div>
                {

                    this.props.tasks.map((task, i) =>
                        <Task taskDescription={task.description} key={i}
                            taskId={task.id}
                            onDeleteTaskHandler={this.props.onDeleteTaskHandler}

                        />
                    )
                }
            </div>
        );

    }
}

export default TaskList;

//here tasklist is just the conduit for the onDeleteTaskHandler and OnDoneTaskHandler props into Task