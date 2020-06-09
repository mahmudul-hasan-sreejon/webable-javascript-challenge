import React from 'react';


const ShipmentData = (props) => {
    return (
        <div className="shipment-data-container">
            <label className="shipment-data-label">{props.label}</label>
            <span className="shipment-data-value">{props.value}</span>
        </div>
    );
};

export default ShipmentData;