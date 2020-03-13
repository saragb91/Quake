import axios from 'axios'

export default class EventsService {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/events`,
            withCredentials: true
        })

    }

    getAllEvents = () => this.service.get('/getAllEvents').then(response => response.data)
    postEvents = event => this.service.post(`/new`, event).then(response => response.data)
}