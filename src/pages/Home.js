import React, {Component} from 'react';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'
import Banner from '../components/Banner';

class Home extends Component {
    render() {
        return (
            <>
            <Hero name="Hero-default" >
                <Banner title="Luxurious rooms" subtitle="Deluxe Rooms Starting At $299">
                    <Link to="/rooms" className="btn">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            </>
        );
    }
}

export default Home;