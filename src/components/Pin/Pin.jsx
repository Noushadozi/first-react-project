import React from 'react';
import Atom from '../Atom/Atom';

const Pin = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h5>pin inside Knob</h5>
            <p>{props.steps}</p>
            <Atom steps={props.steps}></Atom>
        </div>
    );
};

export default Pin;