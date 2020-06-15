import React, {Component} from 'react'
import './Room.css'
import {Link} from 'react-router-dom'

class Room extends Component {
    render() {
        return (
            <div className="Room">
                <div className="Room-img-container">
                    <img src={this.props.img} alt={this.props.name} />
                
                <div className="Room-price">
                    <h6>${this.props.price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${this.props.slug}`} className="Room-link">
                    Feature
                </Link>
                </div>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}

export default Room