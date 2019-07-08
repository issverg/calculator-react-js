import React from 'react';
import s from './ClearButton.module.css';

const ClearButton = (props) => {

    return (
        <div className = { s.clearBtn } onClick = { props.handleClear }>
            { props.children }
        </div>
    );
};

export default ClearButton;
