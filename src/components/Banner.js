import React, {Component} from 'react'
import './Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1>{this.props.title}</h1>
                <div />
                <h3>{this.props.subtitle}</h3>
                {this.props.children}
            </div>
        );
    }
}