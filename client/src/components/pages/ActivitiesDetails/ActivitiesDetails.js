import React, { Component } from 'react'
//SERVICES
import ActivitiesServices from '../../../services/activities.services'
//COMPONENTS
import BookingForm from '../Booking/BookingForm'
import Map from '../Maps/Map'
//BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
//CSS
import './ActivitiesDetails.css'
//ROUTER
import { Link } from 'react-router-dom'

class ActivitiesDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activity: null,
            showmodal: false
        }
        this.services = new ActivitiesServices()
    }


    componentDidMount = () => this.getActivitiesDetails()

    getActivitiesDetails = () => {
        this.services.getActivitiesDetails(this.props.match.params.id)
            .then(activity => this.setState({ activity: activity }))
            .catch(err => console.log(err))
    }


    closeModal = () => this.setState({ showmodal: false })
    openModal = () => this.setState({ showmodal: true })

    render() {

        return (

            this.state.activity ?

                <Container className="activity-details">

                    <h1>{this.state.activity.company}</h1>
                    <Row className="row-details">
                        <Col md={{ span: 4, offset: 1 }}>
                            <div className="body-details">
                                <Card.Body>
                                    <h3>{this.state.activity.activity}</h3>
                                    <Card.Text>Dificultad: {this.state.activity.difficulty}</Card.Text>
                                    <Card.Text>Duración: {this.state.activity.duration} horas</Card.Text>
                                    <Card.Text>{this.state.activity.description}</Card.Text>
                                </Card.Body>
                            </div>
                            <div className="div-btn">
                                <Button className="btn-details" variant="dark" onClick={this.openModal}>Reserva!</Button>
                            </div>
                        </Col>


                        <Col md={{ span: 5, offset: 1 }}>
                            <Card.Img variant="top" src={this.state.activity.image} />
                        </Col>
                    </Row>

                    <hr className="hr-details"></hr>
               
                        <Row style={{ height: "500px" }}>

                            <Col className="map">
                            < Map lat={this.state.activity.map.lat} leng={this.state.activity.map.leng} name={this.state.activity.map.name} />
                            </Col>

                        </Row>

                    <Button as="div" variant="dark" size="sm">
                        <Link to="/getAllActivities">Volver</Link>
                    </Button>

                    <Modal show={this.state.showmodal} onHide={this.closeModal}>
                        <Modal.Body>
                            <h3 className="detail-modal">Reserve su actividad</h3>
                            <hr></hr>
                            <BookingForm
                                closeModal={this.closeModal}
                                activityId={this.props.match.params.id}
                                refreshList={this.getActivitiesDetails}
                                userId={this.props.user && this.props.user._id}
                            />
                        </Modal.Body>
                    </Modal>

                </Container > : null
        )
    }
}

export default ActivitiesDetails