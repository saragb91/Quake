import React from 'react';
//CSS
import './Marker.css'

const Marker = ({name}) => {

    return (
        <div className="marker"
            title={name}
            
        />
    );
};

export default Marker;