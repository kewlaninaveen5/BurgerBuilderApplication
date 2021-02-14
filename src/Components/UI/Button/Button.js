import React from 'react';
import Classes from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={[Classes.Button, Classes[props.buttonType]].join(' ')}
        onClick={props.clicked}
    >
        {props.children}
        
    </button>);

export default button;