const Hod = require('../model/hod');
exports.createHod = async (req, res) => {
  try {
    const data = req.body
    const datareading = await Hod.create(data);
    res.status(200).json({
      success: true,
      datareading,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getHod = async (req,res)=>{
  try{
    const datareading= await Hod.find();
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
exports.getHodById = async(req,res)=>{
  try{
    const {id}= req.param
    const data = await Hod.findById(id);
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