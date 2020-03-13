import React from 'react'

//BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//CSS
import './BookCompCard.css'

const BookingCompanyCard = ({ activity, peopleBooking, people, date }) => {

    return (

        <Col md={4}>

            <Card className="card-company">
                <Card.Title>{activity}</Card.Title>
                <Card.Text> {peopleBooking.map(elm => <p>{elm.username}</p>)}</Card.Text>
                <Card.Text>{people}</Card.Text>
                <Card.Text>{date}</Card.Text>
            </Card>

        </Col>
    )
}

export default BookingCompanyCard