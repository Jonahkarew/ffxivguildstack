import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'
class Static extends Component {
    state = {
        members: []
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

        return (
            <div>{
                this.state.members.map(result => {
                    return (
                        <div key={result._id}>
                            this
                        </div>
                    )
                })}

                <Container style={containerStyle}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon = {(<ExpandMoreIcon />)} 
                    aria-controls="panel1a-content">
                    <Typography>Expansion Panel</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            this is something that is here
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </Container>
                                {/* {

                this.state.searchResult.map(result => {
                // console.log(result);
                return (
                    <React.Fragment
                    key={`extraKey-${result._id}`}>

                    <SearchCards
                        key={result._id}
                        name={result.firstName}
                        location={result.location}
                        steamID={result.steam}
                        psnID={result.psn}
                        xboxID={result.xbox}
                        nintendoID={result.nintendo}
                        blizzardID={result.blizzard}
                        id={result._id}
                    >

                    
                    </SearchCards>
                    
                        key={`key-${result._id}`}
                        id={result._id}
                        name={result.firstName}
                        location={result.location}
                        steamID={result.steam}
                        psnID={result.psn}
                        xboxID={result.xbox}
                        nintendoID={result.nintendo}
                        blizzardID={result.blizzard}
                        gameOne={result.gameOne}
                        gameTwo={result.gameTwo}
                        gameThree={result.gameThree}
                    
                        
                    </React.Fragment>
                )
                }) */}
            </div>
        )
    }
}

export default Static
