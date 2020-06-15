import React, {Component} from 'react'
import RoomList from './RoomList'
import Filter from './Filter'

export default class RoomFilter extends Component {
    render() {
        return (
        <>
            <Filter/>
            <RoomList />
        </>
        );
    }
}