const express = require("express");
const router = express.Router();

const {createAdmin} = require("../controller/adminController");
router.route("/admin").post(createAdmin)

module.exports = router;

const {getAdmin} = require("../controller/adminController");
router.route("/admin").get(createAdmin)

const {getAdminById} = require("../controller/adminController");
router.route("/admin/:id").get(createAdmin)