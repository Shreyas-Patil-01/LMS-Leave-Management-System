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

exports.getEmployee = async (req,res)=>{
  try{
    const datareading= await Employee.find();
    res.status(200).json({
      success:true,
      datareading,
    })
  }
  catch (err){
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
exports.getEmployeeById = async(req,res)=>{
  try{
    const {id}= req.param
    const data = await Employee.findById(id);
    res.status(200).json({
      success:true,
      datareading,
    })
  }
  catch(err){
      console.error(err.message);
    res.status(500).send('Server error');
  }
}

