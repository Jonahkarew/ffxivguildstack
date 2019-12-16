import React, { Component } from 'react';
import { makeStyles} from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/list';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/Inbox'

export default function NavigationMenu() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    })

    // const toggleDrawer = (side, open) => {
    //     if(event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')){
    //         return;
    //     }
    //     setState({ ...state, [side]: open})
    // }
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [side]: open });
      };
    



    // const sideList = side => {
    //     <div className={'this'}
    //          role="presentation"
    //          onClick={toggleDrawer(side, false)} 
    //          onKeyDown={toggleDrawer(side, false)}>
    //              <List>
    //                 {['Home', 'Static', 'Blog'].map((text, index) => (
    //                     <ListItem button key='text'>
    //                         <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //                         <ListItemText primary ={text} />
    //                     </ListItem>
    //                 ))}
    //              </List>

    //          </div>
    // }
    const sideList = side => (
        <div
          className={'this'}
          role="presentation"
          onClick={toggleDrawer(side, false)}
          onKeyDown={toggleDrawer(side, false)}
        >
          <List>
            {['Home', 'Static', 'Blog', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Home', 'Static', 'Blog'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
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

