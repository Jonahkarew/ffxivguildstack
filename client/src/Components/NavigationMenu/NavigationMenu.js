import React from 'react';
import { makeStyles} from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button'
// pieces of the list
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// a whole bunch of icons
import SecurityIcon from '@material-ui/icons/Security';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import NoteIcon from '@material-ui/icons/Note';

// react dom routing
import { Link } from 'react-router-dom';

// import login form
import LoginForm from '../LoginForm/LoginForm'


// styles to counterract link styles
const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#212121'
  }
})



export default function NavigationMenu() {

  // where menu is coming from
    const [state, setState] = React.useState({
        left: false,
    })

    const classes=useStyles();
   

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };
    


      // content of the list itself
    const sideList = side => (
        <div
          className={'this'}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {['Login', 'Logout'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <LockOpenIcon /> : <ExitToAppIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}

            <ListItem button key='testForm'>
              <LoginForm />
            </ListItem>
          </List>
          <Divider />
          <List>
            <Link to='/' className={classes.link}>
              <ListItem button key ='home'>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary='Home'></ListItemText>
              </ListItem>
            </Link>
            <Link to='/static' className={classes.link}>
              <ListItem button key ='static'>
                <ListItemIcon><SecurityIcon /></ListItemIcon>
                <ListItemText primary='Static'></ListItemText>
              </ListItem>
            </Link>
            <Link to='/blog' className={classes.link}>
              <ListItem button key ='blog'>
                <ListItemIcon><NoteIcon /></ListItemIcon>
                <ListItemText primary='Blog'></ListItemText>
              </ListItem>
            </Link>
            <Link to='/profile' className={classes.link}>
              <ListItem button key ='profile'>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary='My Profile'></ListItemText>
              </ListItem>
            </Link>
          </List>
        </div>
      );

    
        return (
            <div>
                <Button onClick ={toggleDrawer('left', true)} >Menu</Button>
                <SwipeableDrawer open={state.left}
                                 onClose={toggleDrawer('left', false)}
                                 onOpen={toggleDrawer('left', true)}>
                                     {sideList('left')}
                </SwipeableDrawer>
            </div>
        )
    
}

