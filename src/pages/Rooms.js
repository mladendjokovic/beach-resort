import React, {Component} from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomFilter from '../components/RoomFilter'


class Rooms extends Component {
    render() {
        return (
            <>
            <Hero name="Hero-rooms">
                <Banner title="Take a look at our offer">
                    <Link to="/" className="btn">Back Home</Link>
                </Banner>
            </Hero>
            <RoomFilter />
            </>
        );
    }
}

export default Rooms;