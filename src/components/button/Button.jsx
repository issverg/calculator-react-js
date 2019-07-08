import React from 'react';
import s from './Button.module.css';

const Button = (props) => {
    const oper =    props.children === '=' || props.children === '-' ||
                    props.children === '+' || props.children === '÷' ? s.operator : null;
    return (
        <div className = {`${ s.btnWrapper } ${ oper }`}
             onClick = { () => props.handleClick(props.children) }>
            { props.children }
        </div>
    );
};

export default Button;
