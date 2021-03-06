import React, { Component } from 'react'
//SERVICES
import ActivitiesServices from '../../../services/activities.services'
//CARDS
import ActivitiesCard from './ActivitiesCard'
//BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//CSS
import './ActivitiesList.css'

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
            <Container className="activities-list">
             
                {this.state.activities.length ? (
                    <Row>
                        {this.state.activities.map(elm => <ActivitiesCard key={elm._id}{...elm} />)}
                    </Row>
                ) :
                <div id="container-charge">
                  <div id="charge"></div>  
                </div>
                }
            </Container>
        )
    }
}


export default ActivitiesList