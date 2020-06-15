import React, {Component} from 'react'
// import items from './data'
import Client from './Contentful'

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        maxPrice: 0,
        minPrice: 0,
        price: 0,
        pets: false,
        breakfast: false
    }
   getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoom",
        order: "fields.price"
      });
      let rooms = this.formatData(response.items);

      let featuredRooms = rooms.filter(room => room.featured === true);
      //
      let maxPrice = Math.max(...rooms.map(item => item.price));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        //
        price: maxPrice,
        maxPrice
      });
    } catch (error) {
      console.log(error);
    }
  };
    componentDidMount() {
        this.getData();
    }
    formatData(items) {
        let tempRooms = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id}
            return room
        })
        return tempRooms
    }
    getRoom = slug => {
        let tempRooms = [...this.state.rooms]
        let room = tempRooms.filter(room => room.slug === slug)
        return room[0]
    }
    changeHandle = e => {
        e.target.type !== 'checkbox' ? this.setState({[e.target.name] : e.target.value}, this.filterRooms) 
        : this.setState({[e.target.name] : e.target.checked}, this.filterRooms)
    }
    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            maxPrice,
            price,
            pets,
            breakfast
        } = this.state
        let tempRooms = [...rooms]
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        let tempCapacity = parseInt(capacity)
        if (tempCapacity > 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= tempCapacity)
        }
        if(parseInt(price) < maxPrice) {
            tempRooms = tempRooms.filter(room => room.price <= parseInt(price))
        }
        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast)
        }
        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets)
        }
        this.setState({sortedRooms: tempRooms})
    }
    render() {
        return (
                <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, changeHandle: this.changeHandle}}>
                    {this.props.children}
                </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export {RoomConsumer, RoomContext, RoomProvider}