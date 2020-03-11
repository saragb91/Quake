import React, { Component } from 'react'
//SERVICES
import SportServices from '../../../services/sports.services'
//COMPONENTS
import SportCards from './SportCards'
//BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class SportsList extends Component {
    constructor() {
        super()
        this.state = {
            sports: [],
        }
        this.services = new SportServices()
    }

    componentDidMount = () => this.getAllSports()

    getAllSports = () => {
        this.services.getAllSports()
            .then(allSports => this.setState({ sports: allSports }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>

                {this.state.sports.length ? (
                    <Row>
                        {this.state.sports.map(elm => <SportCards key={elm.sport }{...elm} />)}
                    </Row>
                ) :
                    <p>Cargando...</p>
                }
            </Container>
        )
    }
}


export default SportsList