import React, { Component } from 'react';
import * as firebase from 'firebase';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [], newRoomName: ""
        };
        this.roomsRef = this.props.firebase.database().ref('rooms');

    }

    createRoom(e) {
        e.preventDefault();
        const newRoomName = this.state.newRoomName;
        this.roomsRef.push({
            name: newRoomName
        });
        this.setState({ newRoomName: "" })
    };

    handleChange(e) {
        this.setState({ newRoomName: e.target.value });
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            console.log(snapshot);
            this.setState({ rooms: this.state.rooms.concat(room) });
        });
    }
    render() {
        return (
            <section>
                <div>Available rooms:</div>
                {
                    this.state.rooms.map((room, index) =>
                        <div id="roomsClickable" onClick={() => this.roomChange(room)} key={index}>{room.name}
                        </div>
                    )
                }
                <form onSubmit={(e) => this.createRoom(e)}>
                    <p>Create new room:</p>
                    <input type="text" value={this.state.newRoomName} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" value="Create"></input>
                </form>
            </section>
        );
    }
}

export default RoomList;
