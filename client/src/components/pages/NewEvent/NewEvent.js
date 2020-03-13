import React, { Component } from 'react'
//SERVICES
import EventServices from '../../../services/events.services'
//BOOTSTRAP
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import './NewEvent.css'


class NewEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            event: {
                activity: '',
                company: '',
                duration: '',
                price: '',
                description: '',
                date: '',
            }
        };
        this.services = new EventServices()
        }
            
            

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            event: {...this.state.event, [name]: value}
        })
    }

    postEvent = () => {
        this.services.postEvents(this.state.event)
            .then(() => {
                this.setState( this.state.event )
                this.props.history.push('/')
            })
            .catch(err => console.log({ err }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postEvent()
    }


    render() {

        return (

            <Container className="forest-activity">
                <h3>Organiza el próximo evento</h3>
                <Form className="new-activity">
                    <Form.Group>
                        <Form.Label>Actividad</Form.Label>
                        <Form.Control type="text" name="activity" value={this.state.event.activity} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Empresa</Form.Label>
                        <Form.Control type="text" name="company" value={this.state.event.company} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="number" name="price" value={this.state.event.price} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.event.description} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control type="text" name="province" value={this.state.event.province} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" name="date" value={this.state.event.date} onChange={this.handleChange} min="2020-03-13" max="2020-12-31" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="number" name="phone" value={this.state.event.phone} onChange={this.handleChange} />
                    </Form.Group>

                    <div className="div-new"> 
                        <Button className="btn-new" onClick={this.handleSubmit}>Nuevo evento</Button>
                </div>
                </Form>

            </Container>
        )
    }


}
export default NewEvent