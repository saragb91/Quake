import React from 'react'
import { Link } from 'react-router-dom'

//BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//CSS
import './BookUserCard.css'

const BookingCard = ({ people, date, activityId}) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric' };
    const dateObj = new Date(date)
    const formattedDate = dateObj.toLocaleString("es-ES", options)
    return (

        <Col md={4}>

            <Card className="card-booking">
                <Card.Title><Link to={`/getOneActivity/${activityId._id}`}>{activityId.activity}</Link></Card.Title>
                    <Card.Text>{activityId.company}</Card.Text>
                    <Card.Text>{people} personas</Card.Text>
                    <Card.Text>{formattedDate}</Card.Text>
                    <Card.Text>{activityId.province}</Card.Text>
            </Card>

        </Col>
    )
}

export default BookingCard