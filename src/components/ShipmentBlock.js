import React from 'react';


const ShipmentBlock = (props) => {
    return (
        <div  data-test="shipment-block" className={`shipment-block ${props.status.toLocaleLowerCase()}`}>
            <div className="name-container">
                <span>Name:</span> 
                <span className="nameValue">{props.name}</span>
            </div>

            <div className="id-container">
                <span>ID:</span> 
                <span className="idValue">{props.id}</span>
            </div>

            <div className="status-container">
                <span>Status:</span> 
                <span className="statusValue">{props.status}</span>
            </div>

            <div className="more-details-container">
                <a href={`/shipments/${props.id}`} className="more-details-link">More Details</a>
            </div>
        </div>
    );
};

export default ShipmentBlock;