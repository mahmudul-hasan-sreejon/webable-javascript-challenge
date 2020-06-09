import React, { Component } from 'react';
import axios from 'axios';

import '../css/pagination.css';


class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: props.currentPage,
            totalPage: props.totalPage
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let currentPage = event.target.innerText;
        axios
        .get(`http://localhost:3001/shipments?_page=${currentPage}&_limit=${this.props.limit}`)
        .then((response) => {
            this.props.handleClick(response.data);
            this.setState({currentPage: parseInt(currentPage)});
        });
    }

    renderIndex(index) {
        return (
            <span key={index} className="index-box" onClick={this.handleClick}>{index}</span>
        );
    }

    render() {
        let pagination = [];
        for (let index = 1; index <= this.props.totalPage; index++) {
            pagination.push(this.renderIndex(index));
        }
        return (
            <div className="pagination">
                {pagination}
            </div>
        );
    }
}

export default Pagination;