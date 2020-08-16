import React, { Component } from 'react';
import axios from 'axios';

export class Room extends Component
{
    constructor(props) {
        super(props);

        this.onRoomUpdate = this.onRoomUpdate.bind(this);
        this.onRoomDelete = this.onRoomDelete.bind(this);

        this.state = {
            rooms: [],
            loading: false
        }
    }

    componentDidMount() {
        this.populateRoomsData();
    }

    onRoomUpdate(id) {
        const { history } = this.props;
        history.push('/update/' + id);
    }

    onRoomDelete(id) {
        const { history } = this.props;
        history.push('/delete/' + id);
    }

    populateRoomsData() {
        axios.get("api/Room/SingleRoom/" + 1).then(room => {
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

    this.populateRoomsData() {
        return (
            <div>
                <h3>Single Room</h3>
                <p>{room.name}</p>
            </div>
        );
    }

    render() {
        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
                this.renderAllRoomsTable()    
            )

        return (
            <div>
                <h1>All Rooms</h1>
                <p>Here you can see all Rooms</p>
                {content}
            </div>
        )
    }
}