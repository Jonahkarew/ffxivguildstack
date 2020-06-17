const axios = require("axios");
const cheerio = require("cheerio");


const character = (id) => {
    let url = `https://na.finalfantasyxiv.com/lodestone/character/${id}/`;

    axios.get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
    }).then(response => {
        const $ = cheerio.load(response.data)
        var character = {
            name: $('.frame__chara__name').text(),
            title: $('.frame__chara__title').text(),
            level: parseInt($('.character__class__data p').text().replace('LEVEL', '').trim()),
            // world: $(".frame__chara__world"),
            picture: $(".character__detail__image img").attr("src"),
            stats: {
                attributes: {
                    strength: $(".character__param__list tr td").eq(0).text(),
                    dexterity: $(".character__param__list tr td").eq(1).text(),
                    vitality: $(".character__param__list tr td").eq(2).text(),
                    intelligence: $(".character__param__list tr td").eq(3).text(),
                    mind: $(".character__param__list tr td").eq(4).text(),
                },
                subAttributes: {
                    criticalHitRate: $(".character__param__list tr td").eq(5).text(),
                    determination: $(".character__param__list tr td").eq(6).text(),
                    directHitRate: $(".character__param__list tr td").eq(7).text(),
                },
                defensiveProperties: {
                    defense: $(".character__param__list tr td").eq(8).text(),
                    magicDefense: $(".character__param__list tr td").eq(9).text(),
                },
                physicalProperties: {
                    attackPower: $(".character__param__list tr td").eq(10).text(),
                    skillSpeed: $(".character__param__list tr td").eq(11).text(),
                },
            },
            gear: {
                weapon: {
                    weaponName: $(".db-tooltip__item__name").eq(0).text(),
                    weaponIlvl: parseInt($(".db-tooltip__item__level").eq(0).text().replace("Item Level ", "")),
                },
                offHand: {
                    offHandName: $(`.character__detail__icon`).eq(1)
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
                                parseInt($(`.character__detail__icon`).eq(1)
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
                    headName: $(".db-tooltip__item__name").eq(1).text(),
                    headIlvl: parseInt($(".db-tooltip__item__level").eq(1).text().replace("Item Level ", "")),
                },
                chest: {
                    chestName: $(".db-tooltip__item__name").eq(2).text(),
                    chestIlvl: parseInt($(".db-tooltip__item__level").eq(2).text().replace("Item Level ", "")),
                },
                arms: {
                    armsName: $(".db-tooltip__item__name").eq(3).text(),
                    armsIlvl: parseInt($(".db-tooltip__item__level").eq(3).text().replace("Item Level ", "")),
                },
                belt: {
                    beltName: $(".db-tooltip__item__name").eq(4).text(),
                    beltIlvl: parseInt($(".db-tooltip__item__level").eq(4).text().replace("Item Level ", "")),
                },
                pants: {
                    pantsName: $(".db-tooltip__item__name").eq(5).text(),
                    pantsIlvl: parseInt($(".db-tooltip__item__level").eq(5).text().replace("Item Level ", "")),
                },
                shoes: {
                    shoesName: $(".db-tooltip__item__name").eq(6).text(),
                    shoesIlvl: parseInt($(".db-tooltip__item__level").eq(6).text().replace("Item Level ", "")),
                },
                earring: {
                    earringName: $(".db-tooltip__item__name").eq(7).text(),
                    earringIlvl: parseInt($(".db-tooltip__item__level").eq(7).text().replace("Item Level ", "")),
                },
                necklace: {
                    necklaceName: $(".db-tooltip__item__name").eq(8).text(),
                    necklaceIlvl: parseInt($(".db-tooltip__item__level").eq(8).text().replace("Item Level ", "")),
                },
                wrist: {
                    wristName: $(".db-tooltip__item__name").eq(9).text(),
                    wristIlvl: parseInt($(".db-tooltip__item__level").eq(9).text().replace("Item Level ", "")),
                },
                ring1: {
                    ring1Name: $(".db-tooltip__item__name").eq(10).text(),
                    ring1Ilvl: parseInt($(".db-tooltip__item__level").eq(10).text().replace("Item Level ", "")),
                },
                ring2: {
                    ring2Name:$(".db-tooltip__item__name").eq(11).text(),
                    ring2Ilvl: parseInt($(".db-tooltip__item__level").eq(11).text().replace("Item Level ", "")),
                }
            }
        }
        // return character
        response.json(character)
    }).catch(err => {
        throw err
    })
}

const news = () => {
    let url = `https://na.finalfantasyxiv.com/lodestone/`
    axios.get(url, {
        headers: {
            headers: {
                'Access-Control-Allow-Origin': '*',
              }
        }
    }).then(response => {
        const $ = cheerio.load(response.data);
        let jsn = []
        $(".news__list--topics").each(
            function (){
                var newNews = {
                    title: $(this).children().first().text(),
                    image: $(this).children(".news__list--banner").children().first().children().first().attr("src"),
                    externalLink: `https://na.finalfantasyxiv.com/${$(this).children(".news__list--banner").children("a").attr("href")}`,
                    description: $(this).children(".news__list--banner").children(".mdl-text__xs-m16").text()
                }
                jsn.push(newNews)


            }
        )
        return jsn
        // console.log(json)
    })
}

const getId = (name, world) => {
    let worldParam = world[0].toUpperCase() +  world.slice(1); 
    console.log(worldParam)
    let url = `https://na.finalfantasyxiv.com/lodestone/character/?q=${name}&worldname=${worldParam}&classjob=&race_tribe=&blog_lang=ja&blog_lang=en&blog_lang=de&blog_lang=fr&order=`;
    axios.get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
    }).then(response => {
        const $ = cheerio.load(response.data);
        var idResult = $(".entry").eq(0).children().first().attr("href").replace("/lodestone/character/", "").replace("/", "");
        console.log(idResult)
    }
    
    )
 
}

const newsTest = () => {
    let url = `https://na.finalfantasyxiv.com/lodestone/`;
    axios.get(url, {
        headers: {
            headers: {
                'Access-Control-Allow-Origin': '*',
              }
        }
    }).then(response => { console.log(response)})
}


module.exports = {
    character,
    news,
    getId,
    newsTest
}