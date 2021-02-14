import React from 'react';
import Classes from './Input.css';

const input = (props) => {
    let inputElements = null;
    const inputClasses = [Classes.InputElement];
    
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(Classes.Invalid);
        
    }

    switch (props.elementType) {
        
        case('input'):
            inputElements = <input 
            className={inputClasses.join(' ')} 
            onChange={props.changed}
            {...props.elementConfig} 
            value={props.value} />;
        break;
        case('textarea'):
            inputElements = <textarea 
            className={inputClasses.join(' ')} 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value} />;
        break;
        case ('select'):
            inputElements = (
            <select 
            onChange={props.changed}
            className={inputClasses.join(' ')} 
            value={props.value} >
                {props.elementConfig.options.map(option => (
                    <option 
                        key={option.value}
                        
                         value={option.value} >
                             {option.displayValue}
                    </option>
                )
                )}
            </select>); 
            break;  
        default:
        inputElements = <input 
            className={inputClasses.join(' ')} 
            {...props.elementConfig}
            value={props.value} />;


    }
    
    
    return (
        <div className={Classes.Input} >
            <label className={Classes.Label} >{props.label}</label>
            {inputElements}


        </div>
    )
};

export default input;