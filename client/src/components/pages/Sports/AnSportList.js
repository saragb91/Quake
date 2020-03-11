import React, { Component } from 'react'
//SERVICES
import SportServices from '../../../services/activities.services'
//COMPONENTS
import ActivitiesCard from '../ActivitiesList/ActivitiesCard'
//BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class AnSportsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sports: [],
        }
        this.services = new SportServices()
    }

    componentDidMount = () => this.getAnActivity()

    getAnActivity = () => {

        this.services.getAnActivity(this.props.match.params.sport)
            .then(allSports => {
                this.setState({ sports: allSports })

            })
            .catch(err => console.log(err))

    }


    render() {

        return (
            <Container>

                {this.state.sports.length ? (
                    <Row>
                        {this.state.sports.map(elm => <ActivitiesCard key={elm.sport}{...elm} info={() => this.getAnActivity(elm.sport)} />)}
                    </Row>
                ) :
                    <p>Cargando...</p>
                }
            </Container>
        )
    }
}


export default AnSportsList