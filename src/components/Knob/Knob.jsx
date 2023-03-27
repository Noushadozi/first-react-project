import React from 'react';
import Pin from '../Pin/Pin'

const Knob = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h5>This is knob component</h5>
            <p>Steps here is:{props.steps}</p>
            <Pin steps={props.steps}></Pin>
        </div>
    );
};

export default Knob;