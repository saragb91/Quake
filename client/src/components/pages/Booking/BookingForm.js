import React, { Component } from 'react'
//SERVICES
import BookingServices from '../../../services/booking.services'
//BOOTSTRAP
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


class BookingForm extends Component {
    constructor(props) {
        super(props)
        this.BookingServices = new BookingServices()
        this.state = {
            booking: {
                people: "",
                date: "",
            },
     
        }
    }
    finishAction = () => {
        this.props.closeModal()
        this.props.refreshList()
    }

    postBooking = () => {
        let newBooking = {
            ...this.state.booking,
            activityId: this.props.activityId,
            userId: this.props.userId,
            
        };
        
        
        
        this.BookingServices.postBooking(newBooking)
        .then(() => this.finishAction())
        .catch(err => console.log(err))
      
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            booking: { ...this.state.booking, [name]: value }
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        this.postBooking()
    }


    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
        
                <Form.Group>
                    <Form.Label>Número de personas</Form.Label>
                    <Form.Control type="number" name="people" value={this.state.booking.people} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Escoja fecha de reserva</Form.Label>
                    <input type="date" name="date" value={this.state.booking.date} onChange={this.handleChange}

                        min="2020-01-01" max="2020-12-31" />
                </Form.Group>

                <Button variant="dark" type="submit"><Link to="/mybookings">Sus reservas</Link></Button>
            </Form>

        )
    }
}

export default BookingForm