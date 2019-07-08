import React from 'react';
import s from './InputLine.module.css';

const InputLine = (props) => {

    return (
        <div className = { s.input }>
            { props.input }
        </div>
    );
};

export default InputLine;
