import React from 'react';
import styles from './button.module.css'
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <div onClick={props.onPress} style = {{width: 'auto', cursor:'pointer'}}>
      <div
        className={styles.btn_container}
        style={{ backgroundImage: props.color }}>
        <p style={{ fontSize: '14px' }}>
          {props.title}
        </p>
      </div>
    </div>
  );
}

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,

}

export default Button;
