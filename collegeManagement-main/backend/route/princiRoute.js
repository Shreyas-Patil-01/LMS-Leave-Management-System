const express = require("express");
const router = express.Router();

const {createPrinci} = require("../controller/princiController");
router.route("/princi").post(createPrinci)

module.exports = router;

const {getPrinci} = require("../controller/princiController");
router.route("/princi").get(getPrinci)

const {getPrinciById} = require("../controller/princiController");
router.route("/princi/:guid").get(getPrinciById)