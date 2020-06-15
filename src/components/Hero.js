import React, {Component} from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <header className={this.props.name}>
                {this.props.children}
            </header>
        )
    }
}

export default Hero