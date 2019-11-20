import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage'

class App extends Component {

  state = {
    loginStatus: false
  }

  checkLoginStatus = () => {
    let token = localStorage.getItem('accessToken');
    if(token){
      console.log ('This user is logged in.')
      this.setState({ loginStatus: true })
    }
    else{
      console.log('This user is not logged in.')
      this.setState({ loginStatus: false })
    }
  }

  handleLogout = () => {
    this.setState({ loginStatus: false });
    localStorage.removeItem('accessToken');
    window.location.reload();
  }

 render(){
   return(
          <Router>
            <React.Fragment>

              <Switch exact path = '/' render={(props) => <LandingPage {...props} loginStatus={this.state.loginStatus} checkLoginStatus={this.checkLoginStatus} handleLogout={this.handleLogout}/>}></Switch>
              <Switch exact path = '/main'></Switch>
              <Switch exact path = '/profile'></Switch>
              <Switch exact path = '/register'></Switch>
            </React.Fragment>
          </Router> 
   
  
   )
 }
}

export default App;
