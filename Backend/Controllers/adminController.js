const AdminModule =require("../Module/AdminModule");
const ProductModel = require("../Module/productModule")

const adminLogin = async (req, res)=>{
    const {adminuser, adminpassword} = req.body;
    try {
        const Admin = await AdminModule.findOne({adminid:adminuser})
   
   if(!Admin){
    res.status(400).json({msg:"Invalid Id"})
   }
   
   if(Admin.adminpassword!=adminpassword){
    res.status(400).json({msg:"Invalid password"});
   }
   

   res.status(200).json(Admin);
   
   
   
   
   
    } catch (error) {
        console.error(error);
    }
}



const productSave=async(req, res)=>{
    console.log(req.files);
    const imageUrls = req.files.map(file => file.path);
   const Product= await ProductModel.create({
        productname:req.body.productname,
        productbrand:req.body.productbrand,
        productcategory:req.body.productcategory,
        productdescription:req.body.productdescription,
        productprice:req.body.productprice,
        images:imageUrls,
        defaultImage:imageUrls[0]
    })
    console.log(req.body.productname);
  res.send("data save!!!");
}










module.exports= {
    adminLogin,
    productSave
} 