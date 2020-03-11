import axios from 'axios'

export default class BookingServices{

    constructor() {
        this.service = axios.create({
            baseURL: `${process.env.REACT_APP_URL}/booking`,
            withCredentials: true
        })
    }

        getAllBooking = () => this.service.get('/getAllBooking').then(response => response.data)
        postBooking = booking => this.service.post('/newBooking', booking).then(response => response.data)
        getOwnBookings = id => this.service.get(`/getOwnBooking/${id}`).then(response=> response.data )
        getCompanyActivities = companies => this.service.get(`/getCompanyBooking/${companies}`).then(response => response.data)
    }   