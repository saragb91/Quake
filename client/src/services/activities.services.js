import axios from 'axios'

export default class ActivityServices {

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/activities`,
            withCredentials: true
        })
       
    }
    getAllActivities = () => this.service.get('/getAllActivities').then(response => response.data)
    getActivitiesDetails = id => this.service.get(`/getOneActivity/${id}`).then(response => response.data)
    postActivities = activity => this.service.post(`/new`, activity).then(response => response.data)
    getAnActivity = sport => this.service.get(`/getAnActivity/${sport}`).then(response => response.data)
}