import React from 'react'
//BOOTSTRAP
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//ROUTER
import { Link } from 'react-router-dom'


const ActivitiesCard = ({ image, activity, company, price, province, _id }) => {
    return (

        <Col md={4}>

            <Card>
                <Link to={`/getOneActivity/${_id}`}>
                    <Card.Img variant="top" src={image} />
                </Link>
                <Card.Body>
                    <Card.Title>{activity}</Card.Title>
                    <Card.Text>{company}</Card.Text>
                    <Card.Text>{price} €</Card.Text>
                    <Card.Text>{province}</Card.Text>
                </Card.Body>
            

            </Card>

        </Col>
    )
}

export default ActivitiesCard