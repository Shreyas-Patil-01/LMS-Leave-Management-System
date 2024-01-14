const express = require("express");
const router = express.Router();

const {createEmployee} = require("../controller/employeeController");
router.route("/employee").post(createEmployee)


module.exports = router;

const {getEmployee} = require("../controller/employeeController");
router.route("/employee").get(createEmployee)

const {getEmployeeById} = require("../controller/employeeController");
router.route("/employee/:id").get(createEmployee)