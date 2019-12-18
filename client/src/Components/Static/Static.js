import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container'

// import expansion panels
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'

//import pieces of the table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





class Static extends Component {
    state = {
        members: [
        //     {
        //     name: 'john',
        //     details: 'lorem ipsum',
        //     _id: 123
        // },
        // {
        //     name: 'tim',
        //     details: 'lorem ipsum',
        //     _id: 456
        // }

    ]
    }

    componentDidMount(){
        console.log('something is here static')
        axios.get('/api/user/all').then((response) => {
            this.setState({members: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
      }

    render() {

        const containerStyle={
            marginTop: '30px'
        }

        const panelHeaderStyle={
            borderBottom: '0px solid rgba(224 224 224 0) !important'
        }

        return (
            <div>
                <Container style={containerStyle}>
               
                    {
                this.state.members.map(result => {
                    var name = result.name
                    return (
                        <ExpansionPanel key={result._id}>
                        
                        <ExpansionPanelSummary expandIcon = {(<ExpandMoreIcon />)} aria-controls="panel1a-content">
                            <Table>
                                <TableBody>
                            <TableRow>
                                <TableCell style={panelHeaderStyle}>{result.characterName}</TableCell>
                                <TableCell>{result.characterJob}</TableCell>
                            </TableRow>
                            </TableBody>
                            </Table>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                                <Table aria-label='characterTable'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><b>Gear Slot</b></TableCell>
                                            <TableCell><b>Gear Name</b></TableCell>
                                            <TableCell><b>Gear Ilvl</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left">Weapon</TableCell>
                                            <TableCell align="left">thing 5</TableCell>
                                            <TableCell align="left">thing 6</TableCell>
                                        </TableRow>

                                    </TableBody>
                                </Table>
                        </ExpansionPanelDetails>
                        </ExpansionPanel>
                    )
                })}
                </Container>
            </div>
        )
    }
}

export default Static
