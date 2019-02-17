//this file will provide functionality to call API to get tasks

import axios from 'axios';

//this is a service class
//the URL hitting the API is an async. if we didn't have an await we would need a .then

const TasksService = {
    async getTasks() {
        let res = await axios.get("https://sdapbu5yz1.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        let data = await res.data;
        return data;
    },

    //you could add more functions here e.g. async saveTask()

    async saveTask(task) {
        let res = await axios.post("https://sdapbu5yz1.execute-api.eu-west-2.amazonaws.com/dev/tasks", task);
        return res.data;
    },

    async doneTask(task, TaskId) {
        let res = await axios.put("https://sdapbu5yz1.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + TaskId, task);
        return res.data;
    },

    async deleteTask(task, TaskId) {
        let res = await axios.delete("https://sdapbu5yz1.execute-api.eu-west-2.amazonaws.com/dev/tasks/" + TaskId, task);
        return res.data;
    }

 };
 
 export default TasksService;