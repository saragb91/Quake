import React from 'react'
//ROUTER
import { Link } from 'react-router-dom'
//BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


// import { Link } from 'react-router-dom'
const SportCards = ({ image, sport }) => {



    return (

        <Col md={4}>

            <Card>
                <Link to={`/getAnActivity/${sport}`}>
                    <Card.Img variant="top" src={image} />
                </Link>
                <Card.Body>
                    <Card.Title>{sport}</Card.Title>
                </Card.Body>
               

            </Card>

        </Col>
    )
}

export default SportCards