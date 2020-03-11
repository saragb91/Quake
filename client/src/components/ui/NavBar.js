import React, { Component } from 'react'
//SERVICES
import AuthServices from '../../services/auth.services'
//BOOTSTRAP
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//ROUTER
import { Link } from 'react-router-dom'

const CompanyNavbar = () =>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Quake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as="div"> <Link to="/new">Registrar actividad</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/mybookings">Reservas</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/logout">Cerrar sesión</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

const UserNavbar = () =>
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Quake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as="div"> <Link to="/getAllSports">Deportes</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/">Provincias</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/mybookings">Próximas aventuras</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/logout">Cerrar sesión</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.services = new AuthServices()
    }

    logout = () => {
        this.services.logout()
            .then(response => {
                this.props.setTheUser(false)
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            this.props.user && this.props.user.role === 'COMPANY' ? <CompanyNavbar /> : <UserNavbar />
        )
    }
}

export default Navigation