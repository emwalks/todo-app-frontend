import React from 'react';

import Task from './Task';

class TaskList extends React.Component {
   render(){
       return (
           <div>
               <Task taskDescription="Learn how to drive" />
               <Task taskDescription="Buy a Van" />
               <Task taskDescription="Convert Van..." />
               <Task taskDescription="Van Life!" />
           </div>
            
       );  
   } 
}

export default TaskList ;