const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function(id, func) {
    let url = `https://na.finalfantasyxiv.com/lodestone/character/${id}/`;

    axios.get(url, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        proxy: {
            host: '104.236.174.88',
            port: 3000
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
                }
            } 
        }
        console.log(character)
    })
}