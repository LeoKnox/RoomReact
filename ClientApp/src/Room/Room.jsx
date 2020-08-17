import React, { Component } from 'react';
import axios from 'axios';

export class Room extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            floor: '',
            wall: '',
            width: null,
            length: null
        }
    }

    componentDidMount() {
        const { id } = 1;
        axios.get("api/Room/SingleRoom/" + id).then(room => {
            const response = room.data;

            this.setState({
                name: response.name,
                floor: response.floor,
                wall: response.wall,
                width: response.width,
                length: response.length
            })
        })
    }

    render() {
        return (
            <div>
                <h3>Single Room</h3>
                <p>tt {this.state.name}</p>
            </div>
        );
    }
}