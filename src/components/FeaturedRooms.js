import React, {Component} from 'react'
import {RoomContext} from '../context'
import Room from './Room'
import './FeaturedRooms.css'
import Title from './Title'
import Loading from './Loading'

class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        const {featuredRooms, loading} = this.context
        if(loading) {
            return (
                <Loading />
            )
        }
        return(
            <div className="FeaturedRooms">
                <Title name="Featured Rooms" />
            <div className="FeaturedRooms-center">
                {featuredRooms.map(room => 
                    (<Room key={room.name}  name={room.name} img={room.images[0]} price={room.price} slug={room.slug} />)
                )}
            </div>
            </div>
        )
    }
}

export default FeaturedRooms