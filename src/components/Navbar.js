import React, {Component} from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super();
        this.state = { navToggle: false }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({navToggle: !this.state.navToggle})
    }
    render() {
        return (
            <nav className="Navbar">
                <div className="Navbar-center">
                    <div className="Navbar-header">
                        <Link to="/">
                            <img src={logo} alt="Beach Resort" />
                        </Link>
                        <div className={this.state.navToggle ? 'Navbar-hamburger close': 'Navbar-hamburger'} onClick={this.handleClick}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <ul className={this.state.navToggle ? 'Navbar-links Navbar-show': 'Navbar-links'}>
                        <li onClick={this.handleClick}>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li onClick={this.handleClick}>
                            <Link to="/rooms">
                                Rooms
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;