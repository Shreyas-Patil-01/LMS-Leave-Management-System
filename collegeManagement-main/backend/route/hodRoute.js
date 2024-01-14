const express = require("express");
const router = express.Router();

const {createHod} = require("../controller/hodController");
router.route("/hod").post(createHod)

module.exports = router;

const {getHod} = require("../controller/hodController");
router.route("/hod").get(createHod)

const {getHodById} = require("../controller/hodController");
router.route("/hod/:id").get(createHod)