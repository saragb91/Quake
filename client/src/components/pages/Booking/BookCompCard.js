import React from 'react'

//BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//CSS
import './BookCompCard.css'

const BookingCompanyCard = ({ activity, peopleBooking, id, user, people, date }) => {

   

    return (

        <Col md={4}>

            <Card className="card-company">
                <Card.Title>{activity}</Card.Title>
                <Card.Text> {peopleBooking.map(elm=> <p>{elm.username}</p>)}</Card.Text>
                <Card.Text>{people} personas</Card.Text>
                <Card.Text>{date}</Card.Text>
                {/* <Card.Text>{userId.username}</Card.Text> */}

            </Card>

        </Col>
    )
}

export default BookingCompanyCard