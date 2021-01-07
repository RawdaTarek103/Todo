import * as actionTypes from '../constants/actionTypes';

export const createTask = (task) => {
    return {
        type: actionTypes.CREATE_NEW_TASK,
        payload:task
    }
};

export const deleteTask = (id) => {
    return {
        type: actionTypes.DELETE_TASK,
        payload:id
    }
};

export const editTask = (text) => {
    return {
        type: actionTypes.EDIT_TASK,
        payload:text
    }
};

// if (!this.state.newTask == '') {
//     let newTasks = this.state.tasks;
//     newTasks.push({
//         task: this.state.newTask,
//         date: this.getCurrentDate()
//     })
//     this.inputTask.value = ''
//     this.setState({
//         newTask: '',
//         tasks: newTasks
//     })
// }