const { fetchChar } = require("../../controllers/scrapeController");
const router = require("express").Router();

router.route("/scrape/:name/:world").get(fetchChar)

module.exports = router;