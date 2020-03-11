import React from 'react'
import { Link } from 'react-router-dom'

//BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const BookingCard = ({ people, date, activityId}) => {
    
    return (

        <Col md={4}>

            <Card>
                <Card.Title><Link to={`/getOneActivity/${activityId._id}`}>{activityId.activity}</Link></Card.Title>
                    <Card.Text>{activityId.company}</Card.Text>
                    <Card.Text>{people} personas</Card.Text>
                    <Card.Text>{date}</Card.Text>
                    <Card.Text>{activityId.province}</Card.Text>
            </Card>

        </Col>
    )
}

export default BookingCard