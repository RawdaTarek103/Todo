import React from 'react';
import styles from './task.module.css'
import Button from '../../component/button/button'
import PropTypes from 'prop-types';
import check from '../../assets/check.png'

class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: false
        }
        this.checkToggle.bind(this)

    }

    checkToggle = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    render() {
        return (
            <div className={styles.task_container}>
                <div onClick={this.checkToggle} style={{ width: '35px', marginLeft: '5px' }}>
                    {!this.state.isChecked ? <div className={styles.checkbox} />
                        :
                        <img src={check} style = {{marginTop:'16px'}}/>}
                </div>
                <p
                    className={styles.task_text}
                    style={this.state.isChecked?{ textDecoration: 'line-through', textDecorationColor: 'red' }:{}}>
                    {this.props.taskContent}
                </p>
                <p
                    className={styles.task_text}
                    style={{width: '10%', marginLeft:'10px'}}>
                    {this.props.taskDate}
                </p>
                <div className={styles.btns}>
                    <Button 
                        title='Edit' 
                        onPress = {() => this.props.onEdit()}
                        />
                    <Button
                        title='Delete'
                        color='linear-gradient(rgba(217, 83, 79, .5),rgba(217, 83, 79, 1))'
                        onPress = {() => this.props.onDelete()}/>
                </div>
            </div>
        );
    }
}

export default Task;

Task.propTypes = {
    taskContent: PropTypes.string,
    taskDate: PropTypes.string,
    editTask: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func
}