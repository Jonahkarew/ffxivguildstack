import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";


class Profile extends Component {

    state = {
        email: '',
        characterName: '',
        characterId: '',
        characterTitle: '',
        characterWorld: '',
        characterJob: '',
        characterPicture: '',
        characterLevel: '',
        weaponName: '',
        weaponIlvl: '',
        offHandName: '',
        offHandIlvl: '',
        headName: '',
        headIlvl: '',
        chestName: '',
        chestIlvl: '',
        armsName: '',
        armsIlvl: '',
        beltName: '',
        beltIlvl: '',
        pantsName: '',
        pantsIlvl: '',
        shoesName: '',
        shoesIlvl: '',
        earringName: '',
        earringIlvl: '',
        necklaceName: '',
        necklaceIlvl: '',
        wristName: '',
        wristIlvl: '',
        ring1Name: '',
        ring1Ilvl: '',
        ring2Name: '',
        ring2Ilvl: '',
        strength: '',
        dexterity: '',
        vitality: '',
        intelligence: '',
        mind: '',
        criticalHitRate: '',
        determination: '',
        directHitRate: '',
        defense: '',
        magicDefense: '',
        attackPower: '',
        skillSpeed: '',
        attackMagicPotency: '',
        spellSpeed: '',
        tenacity: '',
        piety: ''
    }


    handleSubmit = (event) => {
        event.preventDefault();

        axios.put('/api/user/update/', {
            email: this.state.email,
            characterName: this.state.characterName,
            characterJob: this.state.characterJob,
            characterTitle: this.state.characterTitle,
            characterWorld: this.state.characterWorld,
            characterPicture: this.state.characterPicture,
            characterLevel: this.state.characterLevel,
            gear: {
                weapon: {
                    weaponName: this.state.weaponName,
                    weaponIlvl: this.state.weaponIlvl,
                },
                offHand: {
                    offHandName: this.state.offHandName,
                    offHandIlvl: this.state.offHandIlvl,
                },
                head: {
                    headName: this.state.headName,
                    headIlvl: this.state.headIlvl,
                },
                chest: {
                    chestName: this.state.chestName,
                    chestIlvl: this.state.chestIlvl,
                },
                arms: {
                    armsName: this.state.armsName,
                    armsIlvl: this.state.armsIlvl,
                },
                belt: {
                    beltName: this.state.beltName,
                    beltIlvl: this.state.beltIlvl,
                },
                pants: {
                    pantsName: this.state.pantsName,
                    pantsIlvl: this.state.pantsIlvl,
                },
                shoes: {
                    shoesName: this.state.shoesName,
                    shoesIlvl: this.state.shoesIlvl,
                },
                earring: {
                    earringName: this.state.earringName,
                    earringIlvl: this.state.earringIlvl,
                },
                necklace: {
                    necklaceName: this.state.necklaceName,
                    necklaceIlvl: this.state.necklaceIlvl,
                },
                wrist: {
                    wristName: this.state.wristName,
                    wristIlvl: this.state.wristIlvl,
                },
                ring1: {
                    ring1Name: this.state.ring1Name,
                    ring1Ilvl: this.state.ring1Ilvl,
                },
                ring2: {
                    ring2Name: this.state.ring2Name,
                    ring2Ilvl: this.state.ring2Ilvl
                }
            },
            stats: {
                attributes: {
                    strength: this.state.strength,
                    dexterity: this.state.dexterity,
                    vitality: this.state.vitality,
                    intelligence: this.state.intelligence,
                    mind: this.state.mind
                },
                subAttributes: {
                    criticalHitRate: this.state.criticalHitRate,
                    determination: this.state.determination,
                    directHitRate: this.state.directHitRate
                },
                defensiveProperties: {
                    defense: this.state.defense,
                    magicDefense: this.state.magicDefense
                },
                physicalProperties: {
                    attackPower: this.state.attackPower,
                    skillSpeed: this.state.skillSpeed
                },
                mentalProperties: {
                    attackMagicPotency: this.state.attackMagicPotency,
                    healingMagicPotency: this.state.healingMagicPotency
                },
                role: {
                    tenacity: this.state.tenacity,
                    piety: this.state.piety
                }
            }
        })
    }


    retrieveProfile = () => {
        const token = localStorage.getItem('accessToken')
        axios.get('/api/user/profile', { 'headers': { token: token } })
            .then((response) => {
                console.log(response.data)
                this.setState({ data: response.data });
                this.setState({
                    email: response.data.email,
                    characterName: response.data.characterName,
                    characterJob: response.data.characterJob,
                    characterTitle: response.data.characterTitle,
                    characterWorld: response.data.characterWorld,
                    characterPicture: response.data.characterPicture,
                    characterLevel: response.data.characterLevel,
                    weaponName: response.data.gear.weapon.weaponName,
                    weaponIlvl: response.data.gear.weapon.weaponIlvl,
                    offHandName: response.data.gear.offHand.offHandName,
                    offHandIlvl: response.data.gear.offHand.offHandIlvl,
                    headName: response.data.gear.head.headName,
                    headIlvl: response.data.gear.head.headIlvl,
                    chestName: response.data.gear.chest.chestName,
                    chestIlvl: response.data.gear.chest.chestIlvl,
                    armsName: response.data.gear.arms.armsName,
                    armsIlvl: response.data.gear.arms.armsIlvl,
                    beltName: response.data.gear.belt.beltName,
                    beltIlvl: response.data.gear.belt.beltIlvl,
                    pantsName: response.data.gear.pants.pantsName,
                    pantsIlvl: response.data.gear.pants.pantsIlvl,
                    shoesName: response.data.gear.shoes.shoesName,
                    shoesIlvl: response.data.gear.shoes.shoesIlvl,
                    earringName: response.data.gear.earring.earringName,
                    earringIlvl: response.data.gear.earring.earringIlvl,
                    necklaceName: response.data.gear.necklace.necklaceName,
                    necklaceIlvl: response.data.gear.necklace.necklaceIlvl,
                    wristName: response.data.gear.wrist.wristName,
                    wristIlvl: response.data.gear.wrist.wristIlvl,
                    ring1Name: response.data.gear.ring1.ring1Name,
                    ring1Ilvl: response.data.gear.ring1.ring1Ilvl,
                    ring2Name: response.data.gear.ring2.ring2Name,
                    ring2Ilvl: response.data.gear.ring2.ring2Ilvl,
                    strength: response.data.stats.attributes.strength,
                    dexterity: response.data.stats.attributes.dexterity,
                    vitality: response.data.stats.attributes.vitality,
                    intelligence: response.data.stats.attributes.intelligence,
                    mind: response.data.stats.attributes.mind,
                    criticalHitRate: response.data.stats.subAttributes.criticalHitRate,
                    determination: response.data.stats.subAttributes.determination,
                    directHitRate: response.data.stats.subAttributes.directHitRate,
                    defense: response.data.stats.defensiveProperties.defense,
                    magicDefense: response.data.stats.defensiveProperties.magicDefense,
                    attackPower: response.data.stats.physicalProperties.attackPower,
                    skillSpeed: response.data.stats.physicalProperties.skillSpeed,
                    attackMagicPotency: response.data.stats.mentalProperties.attackMagicPotency,
                    healingMagicPotency: response.data.stats.mentalProperties.healingMagicPotency,
                    spellSpeed: response.data.stats.mentalProperties.spellSpeed,
                    tenacity: response.data.stats.role.tenacity,
                    piety: response.data.stats.role.piety
                })
            })
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.retrieveProfile();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }


    fetchChar = () => {
        fetch(`/api/user/scrape/${this.state.characterName}/${this.state.characterWorld}`)
            .then(r => r.json())
            .then(res => {
                console.log(res)
                let ohIlvl;
                if (isNaN(res.offHandIlvl)) {
                    ohIlvl = 0
                } else {
                    ohIlvl = res.offHandIlvl
                }

                this.setState({
                    characterName: res.characterName,
                    characterTitle: res.characterTitle,
                    characterLevel: res.characterLevel,
                    characterPicture: res.characterPicture,
                    strength: res.strength,
                    dexterity: res.dexterity,
                    vitality: res.vitality,
                    intelligence: res.intelligence,
                    mind: res.mind,
                    criticalHitRate: res.criticalHitRate,
                    determination: res.determination,
                    directHitRate: res.directHitRate,
                    defense: res.defense,
                    magicDefense: res.defense,
                    attackPower: res.attackPower,
                    skillSpeed: res.skillSpeed,
                    attackMagicPotency: res.attackMagicPotency,
                    healingMagicPotency: res.healingMagicPotency,
                    spellSpeed: res.spellSpeed,
                    tenacity: res.tenacity,
                    piety: res.piety,
                    weaponName: res.weaponName,
                    weaponIlvl: res.weaponIlvl,
                    offHandName: res.offHandName,
                    offHandIlvl: ohIlvl,
                    headName: res.headName,
                    headIlvl: res.headIlvl,
                    chestName: res.chestName,
                    chestIlvl: res.chestIlvl,
                    armsName: res.armsName,
                    armsIlvl: res.armsIlvl,
                    beltName: res.beltName,
                    beltIlvl: res.beltIlvl,
                    pantsName: res.pantsName,
                    pantsIlvl: res.pantsIlvl,
                    shoesName: res.shoesName,
                    shoesIlvl: res.shoesIlvl,
                    earringName: res.earringName,
                    earringIlvl: res.earringIlvl,
                    necklaceName: res.necklaceName,
                    necklaceIlvl: res.necklaceIlvl,
                    wristName: res.wristName,
                    wristIlvl: res.wristIlvl,
                    ring1Name: res.ring1Name,
                    ring1Ilvl: res.ring1Ilvl,
                    ring2Name: res.ring2Name,
                    ring2Ilvl: res.ring2Ilvl,
                })
            })
    }

    

    render() {
        var itemStyle = {
            width: '100%',
        }
        var picStyle = {
            maxWidth: '90%',
            padding: '5%',
            height: '220px',
            borderRadius: '30px',
            verticalAlign: 'middle'
        }
        var buttonStyle = {
            width: '100%'
        }
        var saveButtonStyle = {
            width: '15%',
            bottom: '1em',
            right: '1em',
            position: 'fixed'
        }
        var inputStyle = {
            marginTop: '30px',
            width: '100%'
        }
        var dropDownStyle = {
            margin: "50px 0 0 0",
            width: '100%',

        }
        var gridRoot = {
            flexGrow: 1,
        }

        const worlds = [
            "Aegis",
            "Atomos",
            "Carbuncle",
            "Garuda",
            "Gungnir",
            "Kujata",
            "Ramuh",
            "Tonberry",
            "Typhon",
            "Unicorn",
            "Alexander",
            "Bahamut",
            "Durandel",
            "Fenrir",
            "Ifrit",
            "Ridill",
            "Tiamat",
            "Ultima",
            "Valefor",
            "Yojimbo",
            "Zeromus",
            "Anima",
            "Asura",
            "Belias",
            "Chocobo",
            "Hades",
            "Ixion",
            "Mandragora",
            "Masamune",
            "Pandaemonium",
            "Shinryu",
            "Titan",
            "Adamantoise",
            "Cactuar",
            "Faerie",
            "Gilgamesh",
            "Jenova",
            "Midgardsormr",
            "Sargatanas",
            "Siren",
            "Behemoth",
            "Excalibur",
            "Exodus",
            "Famfrit",
            "Hyperion",
            "Lamia",
            "Leviathan",
            "Ultros",
            "Balmung",
            "Brynhildr",
            "Coeurl",
            "Diablos",
            "Goblin",
            "Malboro",
            "Mateus",
            "Zalera",
            "Cerberus",
            "Louisoix",
            "Moogle",
            "Omega",
            "Ragnarok",
            "Spriggan",
            "Lich",
            "Odin",
            "Phoenix",
            "Shiva",
            "Twintania",
            "Zodiark"
        ].sort()

        return (
            <div style={gridRoot}>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={4}>
                        <Paper style={{ whiteSpace: "nowrap", textAlign: "center" }}>
                            <img
                                style={picStyle}
                                alt={this.state.characterName}
                                src={this.state.characterPicture}></img>
                        </Paper>
                    </Grid>
                    <Grid item style={itemStyle} xs={6} md={6}>
                        <TextField
                            style={inputStyle}
                            label="Email"
                            name='email'
                            disabled
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            helperText="Change your email here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="Character Name"
                            name='characterName'
                            value={this.state.characterName}
                            onChange={this.handleInputChange}
                            helperText="Change your character name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        {/* <TextField
                            style={inputStyle}
                            label="Character World"
                            name='characterWorld'
                            value={this.state.characterWorld}
                            onChange={this.handleInputChange}
                            helperText="Change your character world here"
                            variant="outlined"
                        /> */}
                   
                        <Select style={dropDownStyle} name="characterWorld" onChange={this.handleInputChange} displayEmpty helperText="Change your job here">
                            <InputLabel style={{padding: "0 0 0 5px"}}>Select Character World</InputLabel>
                            {/* <MenuItem value="Phoenix">Phoenix</MenuItem>
                            <MenuItem value="Odin">Odin</MenuItem> */}
                            {worlds.map((world)=>{
                                return(
                                    <MenuItem key={world} value={world}>{world}</MenuItem>
                                )
                            })}
                        </Select>
                     
                       
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="Job"
                            name='characterJob'
                            value={this.state.characterJob}
                            onChange={this.handleInputChange}
                            helperText="Change your job here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle}>
                        <Button button style={buttonStyle}
                            variant="contained"
                            color="primary"
                            onClick={() => this.fetchChar()} >
                            Fetch Profile data from Lodestone
                                </Button>
                    </Grid>

                    {/* stat bank */}
                    <Grid item xs={12}>
                        <Grid container style={{ maxWidth: '400px' }}>
                            <Grid item xs={12}>
                                <Table>

                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Attributes
                                                </TableCell>
                                            <TableCell>
                                                Sub Attributes
                                                </TableCell>
                                            <TableCell>
                                                Defensive Properties
                                                </TableCell>
                                            <TableCell>
                                                Physical Properties
                                                </TableCell>
                                            <TableCell>
                                                Mental Properties
                                                </TableCell>
                                            <TableCell>
                                                Role
                                                </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                Strength: {this.state.strength}
                                            </TableCell>
                                            <TableCell>
                                                Critical Hit: {this.state.criticalHitRate}
                                            </TableCell>
                                            <TableCell>
                                                Defense: {this.state.defense}
                                            </TableCell>
                                            <TableCell>
                                                Attack Power: {this.state.attackPower}
                                            </TableCell>
                                            <TableCell>
                                                Attack Magic Potency: {this.state.attackMagicPotency}
                                            </TableCell>
                                            <TableCell>
                                                Tenacity: {this.state.tenacity}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Dexterity: {this.state.dexterity}
                                            </TableCell>
                                            <TableCell>
                                                Determination: {this.state.determination}
                                            </TableCell>
                                            <TableCell>
                                                Magic Defense: {this.state.magicDefense}
                                            </TableCell>
                                            <TableCell>
                                                SKill Speed: {this.state.skillSpeed}
                                            </TableCell>
                                            <TableCell>
                                                Healing Magic Potency: {this.state.healingMagicPotency}
                                            </TableCell>
                                            <TableCell>
                                                Piety: {this.state.piety}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>
                                                Vitality: {this.state.vitality}
                                            </TableCell>
                                            <TableCell>
                                                Direct Hit Rate: {this.state.directHitRate}
                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>
                                                Spell Speed: {this.state.spellSpeed}
                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                        </TableRow>
                                        <TableRow>

                                            <TableCell>
                                                Intelligence: {this.state.intelligence}
                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>

                                        </TableRow>
                                        <TableRow>

                                            <TableCell>
                                                Mind: {this.state.mind}
                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>
                                            <TableCell>

                                            </TableCell>

                                        </TableRow>
                                    </TableBody>


                                </Table>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="Weapon Name"
                            name='weaponName'
                            // defaultValue={this.state.email}
                            value={this.state.weaponName}
                            onChange={this.handleInputChange}
                            helperText="Change your weapon name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="weaponIlvl"
                            name='weaponIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.weaponIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your weapon item level here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="offHandName"
                            name='offHandName'
                            // defaultValue={this.state.email}
                            value={this.state.offHandName}
                            onChange={this.handleInputChange}
                            helperText="Change your offhand name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="offHandIlvl"
                            name='offHandIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.offHandIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your offhand item level here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="headName"
                            name='headName'
                            // defaultValue={this.state.email}
                            value={this.state.headName}
                            onChange={this.handleInputChange}
                            helperText="Change your head piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="headIlvl"
                            name='headIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.headIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your head piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="chestName"
                            name='chestName'
                            // defaultValue={this.state.email}
                            value={this.state.chestName}
                            onChange={this.handleInputChange}
                            helperText="Change your chest piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="chestIlvl"
                            name='chestIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.chestIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your chest piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="armsName"
                            name='armsName'
                            // defaultValue={this.state.email}
                            value={this.state.armsName}
                            onChange={this.handleInputChange}
                            helperText="Change your arm piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="armsIlvl"
                            name='armsIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.armsIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your arm piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="beltName"
                            name='beltName'
                            // defaultValue={this.state.email}
                            value={this.state.beltName}
                            onChange={this.handleInputChange}
                            helperText="Change your belt piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="beltIlvl"
                            name='beltIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.beltIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your belt piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="pantsName"
                            name='pantsName'
                            // defaultValue={this.state.email}
                            value={this.state.pantsName}
                            onChange={this.handleInputChange}
                            helperText="Change your pants piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="pantsIlvl"
                            name='pantsIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.pantsIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your pants piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="shoesName"
                            name='shoesName'
                            // defaultValue={this.state.email}
                            value={this.state.shoesName}
                            onChange={this.handleInputChange}
                            helperText="Change your shoes piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="shoesIlvl"
                            name='shoesIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.shoesIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your shoes piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="earringName"
                            name='earringName'
                            // defaultValue={this.state.email}
                            value={this.state.earringName}
                            onChange={this.handleInputChange}
                            helperText="Change your earring piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="earringIlvl"
                            name='earringIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.earringIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your earring piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="necklaceName"
                            name='necklaceName'
                            // defaultValue={this.state.email}
                            value={this.state.necklaceName}
                            onChange={this.handleInputChange}
                            helperText="Change your necklace piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="necklaceIlvl"
                            name='necklaceIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.necklaceIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your necklace piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="wristName"
                            name='wristName'
                            // defaultValue={this.state.email}
                            value={this.state.wristName}
                            onChange={this.handleInputChange}
                            helperText="Change your wrist piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="wristIlvl"
                            name='wristIlvl'
                            // defaultValue={this.state.email}
                            value={this.state.wristIlvl}
                            onChange={this.handleInputChange}
                            helperText="Change your wrist piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="ring1Name"
                            name='ring1Name'
                            // defaultValue={this.state.email}
                            value={this.state.ring1Name}
                            onChange={this.handleInputChange}
                            helperText="Change your 1st ring piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="ring1Ilvl"
                            name='ring1Ilvl'
                            // defaultValue={this.state.email}
                            value={this.state.ring1Ilvl}
                            onChange={this.handleInputChange}
                            helperText="Change your 1st ring piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="ring2Name"
                            name='ring2Name'
                            // defaultValue={this.state.email}
                            value={this.state.ring2Name}
                            onChange={this.handleInputChange}
                            helperText="Change your 2nd ring piece name here"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item style={itemStyle} xs={12} md={6}>
                        <TextField
                            style={inputStyle}
                            label="ring2Ilvl"
                            name='ring2Ilvl'
                            // defaultValue={this.state.email}
                            value={this.state.ring2Ilvl}
                            onChange={this.handleInputChange}
                            helperText="Change your 2nd ring piece ilvl here"
                            variant="outlined"
                        />
                    </Grid>
                    {/* <Grid item style={itemStyle} xs={12}>
                        <Button button style={buttonStyle}
                            variant="contained"
                            color="primary"
                            onClick={this.handleSubmit} >
                            Submit
                                </Button>
                    </Grid> */}
                </Grid>
                <Paper elevation={3}>
                    <Button button style={saveButtonStyle}
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}>Save Changes</Button>
                </Paper>

            </div>
        )
    }
}

export default Profile;