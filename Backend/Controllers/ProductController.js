const ProductModule =require("../Module/productModule");

const productDisplay = async(req,res)=>{
    try {
        const Product = await ProductModule.find();
        res.status(200).json(Product);
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    productDisplay
}