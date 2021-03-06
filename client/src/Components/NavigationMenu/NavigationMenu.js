import React from 'react';
import { makeStyles} from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button'
// pieces of the list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// a whole bunch of icons
import SecurityIcon from '@material-ui/icons/Security';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import NoteIcon from '@material-ui/icons/Note';

// react dom routing
import { Link } from 'react-router-dom';

// styles to counterract link styles
const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: '#212121'
  },
  button: {
    width: '100%',
    height: '100%'
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
                <Button className={classes.button} onClick ={toggleDrawer('left', true)} >Menu</Button>
                <SwipeableDrawer open={state.left}
                                 onClose={toggleDrawer('left', false)}
                                 onOpen={toggleDrawer('left', true)}>
                                     {sideList('left')}
                </SwipeableDrawer>
            </div>
        )
    
}

