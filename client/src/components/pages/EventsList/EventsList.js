import React, { Component } from 'react'
//SERVICES
import EventsServices from '../../../services/events.services'
//CARDS
import EventsCard from './EventCard'
//BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//CSS
import './EventList.css'

class EventsList extends Component {
    constructor() {
        super()
        this.state = {
            events: null,
        }
        this.services = new EventsServices()
        
    }

    componentDidMount = () => this.getAllEvents()

    getAllEvents = () => {
        this.services.getAllEvents()
        .then(allEvents => this.setState({ events: allEvents }))
        .catch(err => console.log(err))
    }

    renderEvents = () => {
        
        if (this.state.events === null)return <p>Cargando...</p>
        
        if (!this.state.events.length) {
            return <p>No existen eventos</p>
        } else {
            return (
                <Row>
                    {this.state.events.map(elm => <EventsCard key={elm._id}{...elm} />)}
                </Row>
            )
        }
    }


    render() {
        console.log(this.state.events)
        return (
            <Container className="events-list">
                {this.renderEvents()}
            </Container>
        )
    }
}


export default EventsList