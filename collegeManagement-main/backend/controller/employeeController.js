const Employee = require('../model/employee');
const asyncHandler = require("express-async-handler")

exports.createEmployee = async (req, res) => {
  try {
    const data = req.body;
    const datareading = await Employee.create(data);
    res.status(200).json({
      success: true,
      datareading,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
/*
exports.getEmployee = async (req,res)=>{
  try{
    const datareading= await Employee.find();
    const data=res.body
    res.status(200).json({
      success:true,
      datareading,
      data,
    })
  }
  catch (err){
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
*/

exports.getEmployee = async (req, res) => {
  try {
    const datareading = await Employee.find();
    const requestData = req.body; // Use req.body to get the request data

    res.status(200).json({
      success: true,
      datareading,
      requestData, // Include the request data in the response
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params; // Fix: use req.params to get the parameter
    const data = await Employee.findById(id);
    res.status(200).json({
      success: true,
      data, // Fix: use the correct variable name
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

