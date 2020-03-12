import React, { Component } from 'react'
//SERVICES
import AuthServices from '../../services/auth.services'
//BOOTSTRAP
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//CSS
import './NavBar.css'
//ROUTER
import { Link } from 'react-router-dom'

const CompanyNavbar = props =>
    <Navbar bg="white" expand="md">
        <Navbar.Brand href="/">Quake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as="div"> <Link to="/new">Registrar actividad</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/mybookings">Reservas</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/" onClick={props.logout}>Cerrar sesión</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;

const UserNavbar = props =>
    <Navbar bg="white" expand="md">
        <Navbar.Brand href="/">Quake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as="div"> <Link to="/getAllSports">Deportes</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/">Provincias</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/mybookings">Próximas aventuras</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/" onClick={props.logout}>Cerrar sesión</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>;


const WithoutLogin = props =>

    <Navbar bg="white" expand="md">
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as="div"> <Link to="/signup">Registro</Link></Nav.Link>
                <Nav.Link as="div"> <Link to="/login">Inicio sesión</Link></Nav.Link>
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
                console.log(response);
                this.props.setTheUser(null)
            })
            .catch(err => console.log(err))
    }

    render() {
        if (this.props.user) {
            if (this.props.user.role === 'COMPANY') {
                return <CompanyNavbar logout={() => this.logout()} />
            } else {
                return <UserNavbar logout={() => this.logout()} />
            }
        } else {
            return <WithoutLogin logout={() => this.logout()} />
        }
    }
}

export default Navigation