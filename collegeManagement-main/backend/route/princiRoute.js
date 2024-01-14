const express = require("express");
const router = express.Router();

const {createPrinci} = require("../controller/princiController");
router.route("/princi").post(createPrinci)

module.exports = router;

const {getPrinci} = require("../controller/princiController");
router.route("/princi").get(createPrinci)

const {getPrinciById} = require("../controller/princiController");
router.route("/princi/:id").get(createPrinci)