import React, {Component} from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
import Title from './Title'
import './Services.css'


class Services extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            services: [
                {
                    icon: <FaCocktail />,
                    title: "Free Cocktails",
                    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis quaerat quis dolores ipsa, tempora facere aliquid cumque atque, eum unde provident."
                },
                {
                    icon: <FaHiking />,
                    title: "Endless Hiking",
                    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis quaerat quis dolores ipsa."
                },
                {
                    icon: <FaShuttleVan />,
                    title: "Free Shuttle",
                    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis quaerat quis dolores ipsa, tempora facere aliquid cumque atque, eum unde provident incidunt laborum quasi id laboriosam odio."
                },
                {
                    icon: <FaBeer />,
                    title: "Free Beer",
                    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias veritatis quaerat quis dolores ipsa, tempora facere aliquid cumque atque, eum unde provident incidunt laborum quasi id laboriosam odio, culpa repellendus."
                }
            ]
        }
    }
    render() {
        const items = this.state.services.map((item, i) => {
            return (<div key={i} className="Service">
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.info}</p>
            </div>)
        })
        return (
            <div className="Services">
                <Title name="Services" />
                <div className="Services-center">
                    {items}
                </div>
            </div>
        )
    }
}

export default Services