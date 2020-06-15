import React, {Component} from 'react'
import {RoomContext} from '../context'
import './Filter.css'
import Title from './Title'

export default class Filter extends Component {
    static contextType = RoomContext
    render() {
        let {rooms, type, changeHandle,capacity, maxPrice, price, minPrice, breakfast, pets} = this.context
        const types = ['all',...new Set(rooms.map(room => room.type))]
        let typesOption = types.map((option,index) => 
            (<option key={index} value={option}>{option}</option>)
        )
        const capacityArr = [...new Set(rooms.map(room => room.capacity))]
        const capacityOptions = capacityArr.map((option,index) => 
             (<option key={index} value={option}>{option}</option>)
        )
        return (
            <section className="Filter">
            <Title name="search rooms" />
                <form className="Filter-form">
                    <div className="form-group">
                        <label htmlFor="type">Room type: </label>
                        <select id='type' name='type' onChange={changeHandle}>
                            <option value={type}>{type}</option>
                            {typesOption}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacity">Room capacity: </label>
                        <select id='capacity' name='capacity' onChange={changeHandle}>
                            <option value={capacity}>{capacity}</option>
                            {capacityOptions}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Room price up to {price}$</label>
                        <input type="range" id="price" name="price" min={minPrice} max={maxPrice} value={price} onChange={changeHandle}/>
                    </div>
                    <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" id="breakfast" name="breakfast" checked={breakfast} onChange={changeHandle}/>
                        <label htmlFor="breakfast">breakfast included</label>
                        </div>
                        <div className="single-extra">
                        <input type="checkbox" id="pets" name="pets" checked={pets} onChange={changeHandle}/>
                        <label htmlFor="pets">Pets allowed</label>
                        </div>
                    </div>

                </form>
            </section>
        );
    }
}