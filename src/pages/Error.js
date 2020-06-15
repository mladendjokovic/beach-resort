import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

class Error extends Component {
    render() {
        return (
            <Hero name="Hero-default" >
                <Banner title="404" subtitle="Page Not Found">
                    <Link to="/" className="btn">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
        );
    }
}

export default Error;