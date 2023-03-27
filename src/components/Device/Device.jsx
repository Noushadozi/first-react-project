import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    console.log(props)
    return (
        <div>
            <h1>I have a device: {props.name}</h1>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;