import React, {Component} from 'react';
import './Title.css'

class Title extends Component {
    render() {
        return(
            <div className="Title"> 
               <h3 className="Title">{this.props.name}</h3>
               <div />
            </div>
        )
    }
}

export default Title