import React, { Component } from 'react';

import ShipmentBlock from './ShipmentBlock';
import Search from './Search';


class Shipments extends Component {
    constructor(props) {
        super(props);
        this.updateShipmentDetail = this.updateShipmentDetail.bind(this);
        this.state = {
            shipmentDetail: []
        };
    }

    updateShipmentDetail(data) {
        this.setState({shipmentDetail : data});
    }

    renderShipmentBlock(data) {
        return (<ShipmentBlock key={data.id} id={data.id} status={data.status} total={data.total} name={data.name} />);
    }


    render() {
        return (
            <div>
                <Search handleShipment={this.updateShipmentDetail} />

                <div>
                    {this.state.shipmentDetail.map((data) => this.renderShipmentBlock(data))}
                </div>
            </div>
        );
    }
}

export default Shipments;