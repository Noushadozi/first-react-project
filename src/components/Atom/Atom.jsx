import React from 'react';

const Atom = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h5>Atom Inside pin</h5>
            <p>{props.steps}</p>
        </div>
    );
};

export default Atom;