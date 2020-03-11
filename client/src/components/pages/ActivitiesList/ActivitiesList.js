import React, { Component } from 'react'
//SERVICES
import ActivitiesServices from '../../../services/activities.services'
//CARDS
import ActivitiesCard from './ActivitiesCard'
//BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class ActivitiesList extends Component {
    constructor() {
        super()
        this.state = {
            activities: [],
        }
        this.services = new ActivitiesServices()
    }

    componentDidMount = () => this.getAllActivities()

    getAllActivities = () => {
        this.services.getAllActivities()
            .then(allActiv => this.setState({ activities: allActiv }))
            .catch(err => console.log(err))
    }


    render() {
        return (
            <Container>
             
                {this.state.activities.length ? (
                    <Row>
                        {this.state.activities.map(elm => <ActivitiesCard key={elm._id}{...elm} />)}
                    </Row>
                ) :
                    <p>Cargando...</p>
                }
            </Container>
        )
    }
}


export default ActivitiesList