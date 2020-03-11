import React, { Component } from 'react'
//SERVICES
import ProvinceServices from '../../../services/province.services'
//BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class ProvinceList extends Component {
    constructor() {
        super()
        this.state = {
            provinces: [],
        }
        this.services = new ProvinceServices()
    }

    componentDidMount = () => this.getAllProvinces()

    getAllProvinces = () => {
        this.services.getAllProvinces()
            .then(allProvinces => this.setState({ provinces: allProvinces }))
            .catch(err => console.log(err))
    }


    render() {
        return (
        
        )
    }
}


export default ProvinceList