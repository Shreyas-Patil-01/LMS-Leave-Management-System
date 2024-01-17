const express = require("express");
const router = express.Router();

const {createEmployee} = require("../controller/employeeController");
router.route("/employee").post(createEmployee)


const {getEmployee} = require("../controller/employeeController");
router.route("/employee").get(getEmployee)

const {getEmployeeById} = require("../controller/employeeController");
const employee = require("../model/employee");
router.route("/employee/:guid").get(getEmployeeById)

module.exports = router;
//Creating Authentication.
//router.route('/').post(registerEmployee)
//router.route('/login').post(authEmployee)