import React, { Component } from 'react'
//SERVICES
import BookingServices from '../../../services/booking.services';
//COMPONENTS
import BookingCards from '../Booking/BookUserCard'
import BookCompCard from '../Booking/BookCompCard'
//BOOTSTRAP
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';

class BookingUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
        }
        this.services = new BookingServices()
    }
    
    componentDidMount = () => this.getBookings(this.props.user);
    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextProps.user !== this.props.user) {
            this.getBookings(nextProps.user);
        }
        
        return true;
    }
    
    getBookings = user => {
        if (!user) return;

        console.log(user._id, "el user", user.role, user)
        if (user && user.role === 'CLIENT') {
            this.services.getOwnBookings(user._id)
            .then(bookings => {
                //console.log(bookings)
                this.setState({ bookings })
            })
            .catch(err => console.log(err))
            
        } else {
            
            console.log( "jeijf", user.companyName)
            this.services.getCompanyActivities(user.companyName)
            .then(bookings => {
                //console.log(bookings)
                this.setState({ bookings })
            })
                .catch(err => console.log(err))
        }

    }


    render() {
        console.log(this.state.bookings, "render bookingUser", this.props.user );
    //{this.props.user.role === 'CLIENT'
    return (
            this.state.bookings?
    
        <Container>
      {/* (this.state.bookings.map(elm => <BookCompCard key={elm._id}{...elm} />))} */}
                    
                    <h1>Tus reservas</h1>
                    <Row>
                        
                    {this.props.user.role === 'CLIENT' ? 
                    this.state.bookings.map(elm => <BookingCards key={elm._id}{...elm} />) : 
                        this.state.bookings.map(elm => <BookCompCard key={elm.people}{...elm} info={() => this.getCompanyActivities(elm.people)} />) }
                    {/* //key={elm.sport}{...elm} info={() => this.getAnActivity(elm.sport)} */}
                        {/* {(this.props.user && this.props.user.role === 'CLIENT') ? this.state.bookings.map(elm => <BookingCards key={elm._id}{...elm} />) : this.state.bookings.map(elm => <BookCompCard info={() => this.getBookings(elm)}key={elm._id}{...elm} />)} */}
                        {/* {this.props.user && this.props.user.companyName ? (this.state.bookings.map(elm => <BookCompCard key={elm._id}{...elm} />)) : null} */}
                    </Row>
                </Container> :null
          
    )
    }
}

export default BookingUser;