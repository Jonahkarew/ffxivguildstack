import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import { Redirect } from 'react-router';
import './App.css';
// import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import ProfilePage from './Pages/ProfilePage';
import StaticPage from './Pages/StaticPage'

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

  componentDidMount(){
    this.checkLoginStatus();
  }

 render(){
   return(
          <Router>
              <Switch>
                <Route exact path='/' >
                  <Home loginStatus={this.state.loginStatus} checkLoginStatus={this.checkLoginStatus}/>
                </Route>
                <Route exact path='/static' >
                  <StaticPage loginStatus={this.state.loginStatus}/>
                </Route>
                <Route exact path='/blog' 
                // component={BlogPage} 
                >
                    <BlogPage loginStatus={this.state.loginStatus}/>
                </Route>
                <Route exact path ='/profile' render={(props) => <ProfilePage {...props} loginStatus={this.state.loginStatus} checkLoginStatus={this.checkLoginStatus}/>} >
                </Route>
                {/* <Redirect from="/*" to="/" /> */}
              </Switch>
          </Router> 
   )
 }
}

export default App;
