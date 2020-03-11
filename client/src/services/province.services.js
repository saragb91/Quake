import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/provinces`,
            withCredentials: true
        })

    }
    getAllProvinces = () => this.service.get('/getAllProvinces').then(response => response.data)

}