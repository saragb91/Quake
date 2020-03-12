import React, { Component } from 'react'
//SERVICES
import AuthService from '../../../../services/auth.services'
//BOOTSTRAP
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
//CSS
import './Login.css'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.services = new AuthService()
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value })

    }
    postUser = () => {
        this.services.login(this.state)
            .then(theLoggedUser => {
                this.setState({ username: '', password: '' })
                this.props.setTheUser(theLoggedUser)
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

            <Container className="login">

                <h2>Iniciar sesión</h2>

                <Form className="form-login" onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <div className="login-btn"> 
                        <Button type="submit">
                            ¡Entra!</Button>
                    </div>
                </Form>

            </Container>
        )
    }
}
export default Login