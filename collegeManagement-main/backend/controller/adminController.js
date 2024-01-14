const Admin = require('../model/admin');
exports.createAdmin = async (req, res) => {
  try {
    const data = req.body
    const datareading = await Admin.create(data);
    res.status(200).json({
      success: true,
      datareading,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
exports.getAdmin = async (req,res)=>{
  try{
    const datareading= await Admin.find();
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
exports.getAdminById = async(req,res)=>{
  try{
    const {id}= req.param
    const data = await Admin.findById(id);
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