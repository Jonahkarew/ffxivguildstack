import React, { Component } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container'

// import expansion panels
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Typography from '@material-ui/core/Typography'

//import pieces of the table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';





class Static extends Component {
    state = {
        members: [
        ]
    }

    componentDidMount() {
        axios.get('/api/user/all').then((response) => {
            console.log(response)
            // console.log(response.data[0].gear.weapon)
            this.setState({ members: response.data })

        }).then(
            console.log(`state: ${this.state[0]}`)
        )
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        const containerStyle = {
            marginTop: '30px'
        }

        const panelHeaderStyle = {
            borderBottom: '0px solid rgba(224 224 224 0) !important'
        }

        return (
            <div>
                <Container style={containerStyle}>

                    {
                        this.state.members.map(result => {


                            var avgIlvl = Math.floor(parseInt(
                                result.gear.weapon.weaponIlvl +
                                result.gear.offHand.offHandIlvl +
                                result.gear.head.headIlvl +
                                result.gear.chest.chestIlvl +
                                result.gear.arms.armsIlvl +
                                result.gear.belt.beltIlvl +
                                result.gear.pants.pantsIlvl +
                                result.gear.shoes.shoesIlvl +
                                result.gear.earring.earringIlvl +
                                result.gear.necklace.necklaceIlvl +
                                result.gear.wrist.wristIlvl +
                                result.gear.ring1.ring1Ilvl +
                                result.gear.ring2.ring2Ilvl)
                                / 12)
                            console.log(avgIlvl)
                            console.log(result.gear)

                            return (
                                <ExpansionPanel key={result._id}>

                                    <ExpansionPanelSummary expandIcon={(<ExpandMoreIcon />)} aria-controls="panel1a-content">
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell style={panelHeaderStyle}><b>{result.characterName}</b></TableCell>
                                                    <TableCell><b>{result.characterJob}</b></TableCell>
                                                    <TableCell>
                                                        <b>Ilvl: {avgIlvl}</b>
                                                    </TableCell>
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
                                                    <TableCell align="left">{result.gear.weapon.weaponName}</TableCell>
                                                    <TableCell align="left">{result.gear.weapon.weaponIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Offhand</TableCell>
                                                    <TableCell align="left">{result.gear.offHand.offHandName}</TableCell>
                                                    <TableCell align="left">{result.gear.offHand.offHandIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Head</TableCell>
                                                    <TableCell align="left">{result.gear.head.headName}</TableCell>
                                                    <TableCell align="left">{result.gear.head.headIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Chest</TableCell>
                                                    <TableCell align="left">{result.gear.chest.chestName}</TableCell>
                                                    <TableCell align="left">{result.gear.chest.chestIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Arms</TableCell>
                                                    <TableCell align="left">{result.gear.arms.armsName}</TableCell>
                                                    <TableCell align="left">{result.gear.arms.armsIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Belt</TableCell>
                                                    <TableCell align="left">{result.gear.belt.beltName}</TableCell>
                                                    <TableCell align="left">{result.gear.belt.beltIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Pants</TableCell>
                                                    <TableCell align="left">{result.gear.pants.pantsName}</TableCell>
                                                    <TableCell align="left">{result.gear.pants.pantsIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Shoes</TableCell>
                                                    <TableCell align="left">{result.gear.shoes.shoesName}</TableCell>
                                                    <TableCell align="left">{result.gear.shoes.shoesIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Earring</TableCell>
                                                    <TableCell align="left">{result.gear.earring.earringName}</TableCell>
                                                    <TableCell align="left">{result.gear.earring.earringIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Necklace</TableCell>
                                                    <TableCell align="left">{result.gear.necklace.necklaceName}</TableCell>
                                                    <TableCell align="left">{result.gear.necklace.necklaceIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Wrist</TableCell>
                                                    <TableCell align="left">{result.gear.wrist.wristName}</TableCell>
                                                    <TableCell align="left">{result.gear.wrist.wristIlvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Ring 1</TableCell>
                                                    <TableCell align="left">{result.gear.ring1.ring1Name}</TableCell>
                                                    <TableCell align="left">{result.gear.ring1.ring1Ilvl}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell align="left">Ring 2</TableCell>
                                                    <TableCell align="left">{result.gear.ring2.ring2Name}</TableCell>
                                                    <TableCell align="left">{result.gear.ring2.ring2Ilvl}</TableCell>
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
