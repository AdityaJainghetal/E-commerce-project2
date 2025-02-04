const ProductModule =require("../Module/productModule");

const productDisplay = async(req,res)=>{
    try {
        const Product = await ProductModule.find();
        res.status(200).json(Product);
    } catch (error) {
        console.log(error);
    }
}


// const prodctDataShow = async()=>{
//     const Product = await ProductModule.findById(req.body.id);
//     res.status(200).send(Product);
// }





module.exports={
    productDisplay
}