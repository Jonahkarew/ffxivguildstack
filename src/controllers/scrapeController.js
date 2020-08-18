const axios = require("axios");
const cheerio = require("cheerio");

const fetchChar = async (req, res) => {
    let url = `https://na.finalfantasyxiv.com/lodestone/character/?q=${req.params.name}&worldname=${req.params.world}&classjob=&race_tribe=&blog_lang=ja&blog_lang=en&blog_lang=de&blog_lang=fr&order=`
    try {
        const html = await axios.get(url)
        const $ = await cheerio.load(html.data)
        const charId = $(".entry__link").attr("href").replace("/lodestone/character/", "").replace("/", "")

        // let charData = fetchCharacter(id)
        // res.send(id)



        // =========trial=================



        const charHtml = await axios.get(`https://na.finalfantasyxiv.com/lodestone/character/${charId}/`)
        const $$ = await cheerio.load(charHtml.data)
        let char = {
            
                characterName: $$('.frame__chara__name').text(),
                characterTitle: $$('.frame__chara__title').text(),
                characterLevel: parseInt($$('.character__class__data p').text().replace('LEVEL', '').trim()),
                characterPicture: $$(".character__detail__image img").attr("src"),
                strength: parseInt($$(".character__param__list tr td").eq(0).text()),
                dexterity: $$(".character__param__list tr td").eq(1).text(),
                vitality: $$(".character__param__list tr td").eq(2).text(),
                intelligence: $$(".character__param__list tr td").eq(3).text(),
                mind: $$(".character__param__list tr td").eq(4).text(),
                criticalHitRate: $$(".character__param__list tr td").eq(5).text(),
                determination: $$(".character__param__list tr td").eq(6).text(),
                directHitRate: $$(".character__param__list tr td").eq(7).text(),
                defense: $$(".character__param__list tr td").eq(8).text(),
                magicDefense: $$(".character__param__list tr td").eq(9).text(),
                attackPower: $$(".character__param__list tr td").eq(10).text(),
                skillSpeed: $$(".character__param__list tr td").eq(11).text(),
                attackMagicPotency: $$(".character__param__list tr td").eq(12).text(),
                healingMagicPotency: $$(".character__param__list tr td").eq(13).text(),
                spellSpeed: $$(".character__param__list tr td").eq(14).text(),
                tenacity: $$(".character__param__list tr td").eq(15).text(),
                piety: $$(".character__param__list tr td").eq(16).text(),
                weaponName: $$(".db-tooltip__item__name").eq(0).text(),
                weaponIlvl: parseInt($$(".db-tooltip__item__level").eq(0).text().replace("Item Level ", "")),
                offHandName: $$(`.character__detail__icon`).eq(1)
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
                    $$(`.character__detail__icon`).eq(1)
                        .children()
                        .first()
                        .children(".item_detail_box")
                        .children()
                        .first()
                        .children(".popup_w412_body_gold")
                        .children(".db-tooltip__item__level")
                        .text().replace("Item Level ", ""),
                headName: $$(".db-tooltip__item__name").eq(1).text(),
                headIlvl: parseInt($$(".db-tooltip__item__level").eq(1).text().replace("Item Level ", "")),
                chestName: $$(".db-tooltip__item__name").eq(2).text(),
                chestIlvl: parseInt($$(".db-tooltip__item__level").eq(2).text().replace("Item Level ", "")),
                armsName: $$(".db-tooltip__item__name").eq(3).text(),
                armsIlvl: parseInt($$(".db-tooltip__item__level").eq(3).text().replace("Item Level ", "")),
                beltName: $$(".db-tooltip__item__name").eq(4).text(),
                beltIlvl: parseInt($$(".db-tooltip__item__level").eq(4).text().replace("Item Level ", "")),
                pantsName: $$(".db-tooltip__item__name").eq(5).text(),
                pantsIlvl: parseInt($$(".db-tooltip__item__level").eq(5).text().replace("Item Level ", "")),
                shoesName: $$(".db-tooltip__item__name").eq(6).text(),
                shoesIlvl: parseInt($$(".db-tooltip__item__level").eq(6).text().replace("Item Level ", "")),
                earringName: $$(".db-tooltip__item__name").eq(7).text(),
                earringIlvl: parseInt($$(".db-tooltip__item__level").eq(7).text().replace("Item Level ", "")),
                necklaceName: $$(".db-tooltip__item__name").eq(8).text(),
                necklaceIlvl: parseInt($$(".db-tooltip__item__level").eq(8).text().replace("Item Level ", "")),
                wristName: $$(".db-tooltip__item__name").eq(9).text(),
                wristIlvl: parseInt($$(".db-tooltip__item__level").eq(9).text().replace("Item Level ", "")),
                ring1Name: $$(".db-tooltip__item__name").eq(10).text(),
                ring1Ilvl: parseInt($$(".db-tooltip__item__level").eq(10).text().replace("Item Level ", "")),
                ring2Name: $$(".db-tooltip__item__name").eq(11).text(),
                ring2Ilvl: parseInt($$(".db-tooltip__item__level").eq(11).text().replace("Item Level ", "")),
        }
        res.send(char)
        // ===========endTrial=======


    }
    catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { fetchChar }