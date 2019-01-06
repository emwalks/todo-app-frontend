import React from 'react';

import Task from './Task';

class TaskList extends React.Component {
   render(){

    let listOfTasks = [
        "Learn how to drive",
        "Buy a Van",
        "Convert Van...",
        "Van Life!"
    ];

    return (
        <div>
            {
                listOfTasks.map((task, i) =>
                    <Task taskDescription={task} key={i} />
                )
            }
        </div>
    );

//       return (
//           <div>
//               <Task taskDescription="Learn how to drive" />
//               <Task taskDescription="Buy a Van" />
//               <Task taskDescription="Convert Van..." />
//               <Task taskDescription="Van Life!" />
//           </div>
//           
//       );  
   } 
}

export default TaskList ;