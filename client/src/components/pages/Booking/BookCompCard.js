import React from 'react'

//BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


const BookingCompanyCard = ({ activity, peopleBooking, id, user, people, date}) => {

    return (

        <Col>

            <Card>
                <Card.Title>{activity}</Card.Title>
                <Card.Text>{peopleBooking}</Card.Text>
                <Card.Text>{people} personas</Card.Text>
                <Card.Text>{date}</Card.Text>
                {/* <Card.Text>{userId.username}</Card.Text> */}

            </Card>

        </Col>
    )
}

export default BookingCompanyCard