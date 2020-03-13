import React, { Component } from 'react'
//SERVICES
import AuthServices from '../../../../services/auth.services'
//BOOTSTRAP
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
//CSS
import './Signup.css'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
        this.services = new AuthServices()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })

    }
    postUser = () => {
        this.services.signup(this.state)
            .then(theNewUser => {
                this.setState({ username: '', password: '' })
                this.props.setTheUser(theNewUser)
                this.props.history.push('/')
            })
            .catch(err => console.log({ err }))
    }

    handleSubmit = e => {
        e.preventDefault()
        this.postUser()
    }

    render() {
        return (

            <Container className="signup">

                <h2>Registrar usuario</h2>

                <Form className="form-signup" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <div className="signup-btn">
                        <Button type="submit">¡Regístrate!</Button>
                    </div>
                </Form>

            </Container>
        )
    }
}
export default Signup