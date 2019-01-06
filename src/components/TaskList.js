import React from 'react';

import Task from './Task';

class TaskList extends React.Component {
   render(){

    let listOfTasks = [
        {
            id: 1,
            description: "Learn how to drive",
            completed: false
        }, 
        {
            id: 2,
            description: "Buy a Van",
            completed: false
        }, 
        {
            id: 3,
            description: "Convert Van...",
            completed: false
        }, 
        {
            id: 4,
            description: "Van Life!",
            completed: false
        },    
        
    ];

    return (
        <div>
            {
                listOfTasks.map((task, i) =>
                    <Task taskDescription={task.description} key={i} />
                )
            }
        </div>
    );

   } 
}

export default TaskList ;