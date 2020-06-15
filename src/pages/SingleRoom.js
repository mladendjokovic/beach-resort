import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'
import {RoomContext} from '../context'
import Banner from '../components/Banner'
import './SingleRoom.css'


export default class SingleRoom extends Component {
  static contextType = RoomContext
  render() {
    let {getRoom} = this.context
    let room = getRoom(this.props.match.params.slug)
    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [, ...defaultImages] = images;

    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className='btn'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="SingleRoom">
          <div className="SingleRoom-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="SingleRoom-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="SingleRoom-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
