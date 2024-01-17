const express = require("express");
const router = express.Router();

const {createEmployee} = require("../controller/employeeController");
router.route("/employee").post(createEmployee)


const {getEmployee} = require("../controller/employeeController");
router.route("/employee").get(createEmployee)

const {getEmployeeById} = require("../controller/employeeController");
router.route("/employee/:id").get(createEmployee)

module.exports = router;
//Creating Authentication.
//router.route('/').post(registerEmployee)
//router.route('/login').post(authEmployee)