import React, { Component } from 'react';
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//AUTH COMPONENTS
import Login from './components/pages/Auth/login/Login'
import Signup from './components/pages/Auth/signup/Signup'

// ACTIVITIES COMPONENTS
import ActivitiesList from './components/pages/ActivitiesList/ActivitiesList'
import ActivitiesDetails from './components/pages/ActivitiesDetails/ActivitiesDetails'
import NewActivity from './components/pages/ActivitiesList/NewActivity'
import BookingUser from './components/pages/BookingPage/BookingUser'
import Index from './components/pages/Index/Index'

//NAVIGATION COMPONENT
import Navigation from './components/ui/NavBar'

//SPORTS COMPONENTS
import SportsList from './components/pages/Sports/SportList'
import AnSportsList from './components/pages/Sports/AnSportList'

//SERVICES
import AuthServices from './services/auth.services'

//ROUTE
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = { user: null }
    this.services = new AuthServices()
  }

  componentDidUpdate = (prevProps, prevState) => console.log("El estado de App se ha actualizado:", this.state)
  componentDidMount = () => this.fetchUser()

  setTheUser = userObj => this.setState({ user: userObj })

  fetchUser = () => {
    this.services.loggedin()
      .then(theUser => this.setState({ user: theUser }))
      .catch(() => this.setState({ user: false }))
  }

  render() {
    return (
      <>

        {<Navigation user={this.state.user} fetchUser={this.fetchUser} />}
        <a href='/getAllActivities'>Ínspirame</a>

        <Switch>

          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/getAllActivities" render={props => <ActivitiesList {...props} />} />
          <Route path="/getOneActivity/:id" render={match => <ActivitiesDetails user={this.state.user} {...match} />} />
          <Route path="/new" render={props => <NewActivity {...props} />} />
          <Route path="/getAllSports" render={props => <SportsList {...props} />} />
          <Route path="/getAnActivity/:sport" render={match => <AnSportsList {...match} />} />
          <Route path="/mybookings" render={match => <BookingUser user={this.state.user} {...match} />} />
          <Route path="/getCompanyBooking/:activities" render={match =><BookingUser user={this.state.user}{...match} />} />
          <Route path="/" render={props => <Index {...props}/>} />
        </Switch>


      </>
    )
  }
}
export default App;
