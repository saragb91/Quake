import React, { Component } from 'react'
//SERVICES
import BookingServices from '../../../services/booking.services';
//COMPONENTS
import BookingCards from '../Booking/BookUserCard'
import BookCompCard from '../Booking/BookCompCard'
//BOOTSTRAP
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
//CSS
import './BookingUser.css'

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

        if (user && user.role === 'CLIENT') {

            this.services.getOwnBookings(user._id)
                .then(bookings => this.setState({ bookings }))
                .catch(err => console.log(err))

        } else {

            this.services.getCompanyActivities(user.companyName)
                .then(bookings => this.setState({ bookings }))
                .catch(err => console.log(err))
        }
    }

    
    render() {
        console.log(this.state.bookings);
        return (
            this.state.bookings ?

                <Container className="new-booking">

                    <h1>Tus reservas</h1>
                    <Row>
                        {this.state.bookings.length && this.props.user && this.props.user.role === 'CLIENT' ?
                            this.state.bookings.map(elm => <BookingCards key={elm._id}{...elm} />) :
                            this.state.bookings.map(elm => <BookCompCard key={elm._id}{...elm} info={() => this.getCompanyActivities(elm.people)} />)}
                    </Row>
                </Container> : null
        )
    }
}

export default BookingUser;