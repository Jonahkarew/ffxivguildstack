import React, { Component } from 'react';
import axios from 'axios';
// import ls from "lodestonejs";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import $ from 'jquery';


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
                    skillSPeed: response.data.stats.physicalProperties.skillSpeed,
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

    getId = () => {
        let url = `https://cors-anywhere.herokuapp.com/https://na.finalfantasyxiv.com/lodestone/character/?q=${this.state.characterName}&worldname=${this.state.characterWorld}&classjob=&race_tribe=&blog_lang=ja&blog_lang=en&blog_lang=de&blog_lang=fr&order=`;
        $.get(url, (res) => {
            var idResult = $(res).find(".entry__link").attr("href")
                .replace("/lodestone/character/", "").replace("/", "");
            console.log(idResult);
            console.log()
            this.setState({ characterId: idResult })
            this.getChar(idResult)
        })
    }

    getChar = (id) => {
        $.get(`https://cors-anywhere.herokuapp.com/https://na.finalfantasyxiv.com/lodestone/character/${id}/`, (res) => {
            console.log(res)
            this.setState(
                {
                    characterName: $(res).find('.frame__chara__name').text(),
                    characterTitle: $(res).find('.frame__chara__title').text(),
                    characterLevel: parseInt($(res).find('.character__class__data p').text().replace('LEVEL', '').trim()),
                    characterPicture: $(res).find(".character__detail__image img").attr("src"),
                    strength: parseInt($(res).find(".character__param__list tr td").eq(0).text()),
                    dexterity: $(res).find(".character__param__list tr td").eq(1).text(),
                    vitality: $(res).find(".character__param__list tr td").eq(2).text(),
                    intelligence: $(res).find(".character__param__list tr td").eq(3).text(),
                    mind: $(res).find(".character__param__list tr td").eq(4).text(),
                    criticalHitRate: $(res).find(".character__param__list tr td").eq(5).text(),
                    determination: $(res).find(".character__param__list tr td").eq(6).text(),
                    directHitRate: $(res).find(".character__param__list tr td").eq(7).text(),
                    defense: $(res).find(".character__param__list tr td").eq(8).text(),
                    magicDefense: $(res).find(".character__param__list tr td").eq(9).text(),
                    attackPower: $(res).find(".character__param__list tr td").eq(10).text(),
                    skillSpeed: $(res).find(".character__param__list tr td").eq(11).text(),
                    attackMagicPotency: $(res).find(".character__param__list tr td").eq(12).text(),
                    healingMagicPotency: $(res).find(".character__param__list tr td").eq(13).text(),
                    spellSpeed: $(res).find(".character__param__list tr td").eq(14).text(),
                    tenacity: $(res).find(".character__param__list tr td").eq(15).text(),
                    piety: $(res).find(".character__param__list tr td").eq(16).text(),
                    weaponName: $(res).find(".db-tooltip__item__name").eq(0).text(),
                    weaponIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(0).text().replace("Item Level ", "")),
                    offHandName: $(res).find(`.character__detail__icon`).eq(1)
                        .children()
                        .first()
                        .children(".item_detail_box")
                        .children()
                        .first()
                        .children(".popup_w412_body_gold")
                        .children().first()
                        .children().first()
                        .children(".db-tooltip__item__txt")
                        .children("h2")
                        .text(),
                    offHandIlvl:
                        parseInt($(res).find(`.character__detail__icon`).eq(1)
                            .children()
                            .first()
                            .children(".item_detail_box")
                            .children()
                            .first()
                            .children(".popup_w412_body_gold")
                            .children(".db-tooltip__item__level")
                            .text().replace("Item Level ", "")),
                    headName: $(res).find(".db-tooltip__item__name").eq(1).text(),
                    headIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(1).text().replace("Item Level ", "")),
                    chestName: $(res).find(".db-tooltip__item__name").eq(2).text(),
                    chestIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(2).text().replace("Item Level ", "")),
                    armsName: $(res).find(".db-tooltip__item__name").eq(3).text(),
                    armsIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(3).text().replace("Item Level ", "")),
                    beltName: $(res).find(".db-tooltip__item__name").eq(4).text(),
                    beltIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(4).text().replace("Item Level ", "")),
                    pantsName: $(res).find(".db-tooltip__item__name").eq(5).text(),
                    pantsIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(5).text().replace("Item Level ", "")),
                    shoesName: $(res).find(".db-tooltip__item__name").eq(6).text(),
                    shoesIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(6).text().replace("Item Level ", "")),
                    earringName: $(res).find(".db-tooltip__item__name").eq(7).text(),
                    earringIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(7).text().replace("Item Level ", "")),
                    necklaceName: $(res).find(".db-tooltip__item__name").eq(8).text(),
                    necklaceIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(8).text().replace("Item Level ", "")),
                    wristName: $(res).find(".db-tooltip__item__name").eq(9).text(),
                    wristIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(9).text().replace("Item Level ", "")),
                    ring1Name: $(res).find(".db-tooltip__item__name").eq(10).text(),
                    ring1Ilvl: parseInt($(res).find(".db-tooltip__item__level").eq(10).text().replace("Item Level ", "")),
                    ring2Name: $(res).find(".db-tooltip__item__name").eq(11).text(),
                    ring2Ilvl: parseInt($(res).find(".db-tooltip__item__level").eq(11).text().replace("Item Level ", "")),
                    stats: {
                        attributes: {
                            strength: parseInt($(res).find(".character__param__list tr td").eq(0).text()),
                            dexterity: $(res).find(".character__param__list tr td").eq(1).text(),
                            vitality: $(res).find(".character__param__list tr td").eq(2).text(),
                            intelligence: $(res).find(".character__param__list tr td").eq(3).text(),
                            mind: $(res).find(".character__param__list tr td").eq(4).text(),
                        },
                        subAttributes: {
                            criticalHitRate: $(res).find(".character__param__list tr td").eq(5).text(),
                            determination: $(res).find(".character__param__list tr td").eq(6).text(),
                            directHitRate: $(res).find(".character__param__list tr td").eq(7).text(),
                        },
                        defensiveProperties: {
                            defense: $(res).find(".character__param__list tr td").eq(8).text(),
                            magicDefense: $(res).find(".character__param__list tr td").eq(9).text(),
                        },
                        physicalProperties: {
                            attackPower: $(res).find(".character__param__list tr td").eq(10).text(),
                            skillSpeed: $(res).find(".character__param__list tr td").eq(11).text(),
                        },
                        mentalProperties: {
                            attackMagicPotency: $(res).find(".character__param__list tr td").eq(12).text(),
                            healingMagicPotency: $(res).find(".character__param__list tr td").eq(13).text(),
                            spellSpeed: $(res).find(".character__param__list tr td").eq(14).text(),
                        },
                        role: {
                            tenacity: $(res).find(".character__param__list tr td").eq(15).text(),
                            piety: $(res).find(".character__param__list tr td").eq(16).text()
                        }
                    },
                    gear: {
                        weapon: {
                            weaponName: $(res).find(".db-tooltip__item__name").eq(0).text(),
                            weaponIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(0).text().replace("Item Level ", "")),
                        },
                        offHand: {
                            offHandName: $(res).find(`.character__detail__icon`).eq(1)
                                .children()
                                .first()
                                .children(".item_detail_box")
                                .children()
                                .first()
                                .children(".popup_w412_body_gold")
                                .children().first()
                                .children().first()
                                .children(".db-tooltip__item__txt")
                                .children("h2")
                                .text(),
                            offHandIlvl:
                                parseInt($(res).find(`.character__detail__icon`).eq(1)
                                    .children()
                                    .first()
                                    .children(".item_detail_box")
                                    .children()
                                    .first()
                                    .children(".popup_w412_body_gold")
                                    .children(".db-tooltip__item__level")
                                    .text().replace("Item Level ", "")),
                        },
                        head: {
                            headName: $(res).find(".db-tooltip__item__name").eq(1).text(),
                            headIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(1).text().replace("Item Level ", "")),
                        },
                        chest: {
                            chestName: $(res).find(".db-tooltip__item__name").eq(2).text(),
                            chestIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(2).text().replace("Item Level ", "")),
                        },
                        arms: {
                            armsName: $(res).find(".db-tooltip__item__name").eq(3).text(),
                            armsIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(3).text().replace("Item Level ", "")),
                        },
                        belt: {
                            beltName: $(res).find(".db-tooltip__item__name").eq(4).text(),
                            beltIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(4).text().replace("Item Level ", "")),
                        },
                        pants: {
                            pantsName: $(res).find(".db-tooltip__item__name").eq(5).text(),
                            pantsIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(5).text().replace("Item Level ", "")),
                        },
                        shoes: {
                            shoesName: $(res).find(".db-tooltip__item__name").eq(6).text(),
                            shoesIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(6).text().replace("Item Level ", "")),
                        },
                        earring: {
                            earringName: $(res).find(".db-tooltip__item__name").eq(7).text(),
                            earringIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(7).text().replace("Item Level ", "")),
                        },
                        necklace: {
                            necklaceName: $(res).find(".db-tooltip__item__name").eq(8).text(),
                            necklaceIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(8).text().replace("Item Level ", "")),
                        },
                        wrist: {
                            wristName: $(res).find(".db-tooltip__item__name").eq(9).text(),
                            wristIlvl: parseInt($(res).find(".db-tooltip__item__level").eq(9).text().replace("Item Level ", "")),
                        },
                        ring1: {
                            ring1Name: $(res).find(".db-tooltip__item__name").eq(10).text(),
                            ring1Ilvl: parseInt($(res).find(".db-tooltip__item__level").eq(10).text().replace("Item Level ", "")),
                        },
                        ring2: {
                            ring2Name: $(res).find(".db-tooltip__item__name").eq(11).text(),
                            ring2Ilvl: parseInt($(res).find(".db-tooltip__item__level").eq(11).text().replace("Item Level ", "")),
                        }
                    }
                }
            )
        })
    }


    render() {
        var itemStyle = {
            width: '100%',
        }
        var picStyle={
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
        var gridRoot = {
            flexGrow: 1,
        }
        return (
            <div style={gridRoot}>
                <Grid container spacing={3}>
                    <Grid item  xs={6} md={4}>
                        <Paper style={{whiteSpace: "nowrap", textAlign: "center"}}>
                            <img 
                            style={picStyle}
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
                        <TextField
                            style={inputStyle}
                            label="Character World"
                            name='characterWorld'
                            value={this.state.characterWorld}
                            onChange={this.handleInputChange}
                            helperText="Change your character world here"
                            variant="outlined"
                        />
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
                            onClick={() => this.getId()} >
                            Fetch Profile data from Lodestone
                                </Button>
                    </Grid>

                    {/* stat bank */}
                    <Grid container>
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