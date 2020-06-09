import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Shipments from "../components/Shipments";
import ShipmentDetail from "../components/ShipmentDetail";


const Routes = (
    <Router>
        <Switch>
            <Route path="/" exact
                render={
                    () => {
                        return (<Shipments />);
                    }
                }
            />

            <Route path="/shipments/:shipmentId" exact
                render={
                    (props) => {
                        return (<ShipmentDetail {...props} />);
                    }
                }
            />
        </Switch>
    </Router>
);

export default Routes;