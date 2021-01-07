import React from 'react';
import styles from './tasks.module.css';
import Task from '../task/task';
import PropTypes from 'prop-types';

function Tasks(props) {
    const tasks = props.tasks;
    const listItems = tasks.map((task, index) =>
        <Task
            key={index}
            taskContent={task.task}
            taskDate= {task.date}
            onDelete={() => props.handledelete(index)} 
            onEdit={() => props.showEdit(index)}/>
    );
    return (
        <ul style={{ padding: '0px' }} className={styles.list_container}>{listItems}</ul>
    );
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;
