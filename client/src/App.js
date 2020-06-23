import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import ProfilePage from './Pages/ProfilePage';
import StaticPage from './Pages/StaticPage';
import NavBar from './Components/NavBar/NavBar';
import Container from '@material-ui/core/Container';


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
    console.log("trying to log out")
    this.setState({ loginStatus: false });
    localStorage.removeItem('accessToken');
    // window.location.reload();
  }

  componentDidMount(){
    this.checkLoginStatus();
  }

  

 render(){
   return(

          <div>
            <Container>
            
          <Router>
              <NavBar handleLogout={this.handleLogout} 
                      checkLoginStatus={this.checkLoginStatus} 
                      loginStatus={this.state.loginStatus} />
              <Switch>
                <Route exact path='/' >
                  <Home 
                        loginStatus={this.state.loginStatus} 
                        checkLoginStatus={this.checkLoginStatus}
                        >
                        </Home>
                </Route>
                <Route exact path='/static' >
                  <StaticPage 
                        loginStatus={this.state.loginStatus}/>
                </Route>
                <Route exact path='/blog' >
                    <BlogPage 
                          loginStatus={this.state.loginStatus}/>
                </Route>
                <Route exact path ='/profile' render={(props) => 
                    <ProfilePage 
                          {...props} 
                          loginStatus={this.state.loginStatus} 
                          checkLoginStatus={this.checkLoginStatus}/>} >
                </Route>
              </Switch>
          </Router>
          </Container>
          </div>
   )
 }
}

export default App;
