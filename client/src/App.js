import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Profile from './Pages/Profile';
import Static from './Pages/Static'

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
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route exact path='/static'>
                  <Static />
                </Route>
                <Route exact path='/blog' component={Blog}>
                    <Blog />
                </Route>
                <Route exact path ='/profile'>
                    <Profile />
                </Route>
              </Switch>
          </Router> 
   )
 }
}

export default App;
