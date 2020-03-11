import React, { Component } from 'react'
//SERVICES
import ActivitiesServices from '../../../services/activities.services'
//BOOTSTRAP
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

const emptyActivity = {
    activity: '',
    company: '',
    duration: '',
    price: '',
    description: '',
    date: '',
};


//import FilesServices from '../../../services/files.services'


class NewActivity extends Component {
    constructor() {
        super()
        this.state = {
            activity: emptyActivity,
        }
        this.services = new ActivitiesServices()
    }



    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
    }

    postActivity = () => {
        this.services.postActivities(this.state)
            .then(() => {
                this.setState({ activity: emptyActivity })
                this.props.history.push('/')
            })
            .catch(err => console.log({ err }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postActivity()
    }


    render() {
        return (

            <Container>

                <Form>
                    <Form.Group>
                        <Form.Label>Actividad</Form.Label>
                        <Form.Control type="text" name="activity" value={this.state.activity.activity} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Empresa</Form.Label>
                        <Form.Control type="text" name="company" value={this.state.activity.company} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Duración</Form.Label>
                        <Form.Control type="number" name="duration" value={this.state.activity.duration} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" name="price" value={this.state.activity.price} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.activity.description} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.activity.date} onChange={this.handleChange} />
                    </Form.Group>



                    <Button onClick={this.handleSubmit} variant="dark">Crear nueva actividad</Button>
                </Form>

            </Container>
        )
    }


}
export default NewActivity