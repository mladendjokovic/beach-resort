import React, {Component} from 'react'
import {RoomContext} from '../context'
import Room from './Room'
import './RoomList.css'


export default class RoomList extends Component {
    static contextType = RoomContext
    render() {
        let {sortedRooms} = this.context
        const rooms = sortedRooms.map(room => 
            (<Room key={room.name}  name={room.name} img={room.images[0]} price={room.price} slug={room.slug} />)
        )
        if(rooms.length === 0) {
            return (
                <div className="RoomList">
                    <h2>No such room found</h2>
                </div>
                );
            }
        return (<div className="RoomList">
                    <div className="RoomList-center">
                        {rooms}
                    </div>
                </div>)
    }
}