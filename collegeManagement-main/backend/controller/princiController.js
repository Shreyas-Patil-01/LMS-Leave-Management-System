const Princi = require('../model/princi');
exports.createPrinci = async (req, res) => {
  try {
    const data = req.body
    const datareading = await Princi.create(data);
    res.status(200).json({
      success: true,
      datareading,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getPrinci = async (req,res)=>{
  try{
    const datareading= await Princi.find();
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
exports.getPrinciById = async(req,res)=>{
  try{
    const {id}= req.param
    const data = await Princi.findById(id);
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