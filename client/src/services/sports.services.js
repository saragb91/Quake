import axios from 'axios'

export default class Services {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/sports`,
            withCredentials: true
        })

    }
    getAllSports = () => this.service.get('/getAllSports').then(response => response.data)
  
}