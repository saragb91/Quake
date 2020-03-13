import React from 'react'
//BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//CSS
import './EventCard.css'


const EventsCard = ({ activity, company, price, province, description, date, phone }) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleString("es-ES", options)


return (

        <Col md={4}>

            <Card className="card-event">
                <Card.Body>
                    <Card.Title>{activity}</Card.Title>
                    <Card.Text>{company}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price} €</Card.Text>
                    <Card.Text>{formattedDate}</Card.Text>
                    <Card.Text>{province}</Card.Text>
                    <Card.Text>{phone}</Card.Text>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default EventsCard