const express = require("express");
const route= express.Router();
const multer =require('multer');
const path =require('path')

const AdminController = require("../Controllers/adminController");

const storage = multer.diskStorage({
    destination:(req,files ,cb)=>{
        cb(null,"uploads/")
    },
    filename: (req,file,cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`)
    },
})


const fileFilter= (req,file,cb)=>{
    const allowedFileType= /jpeg|jpg|png|pdf/;
    const extname = allowedFileType.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileType.test(file.mimetype)

    if(extname && mimetype){
        cb(null,true);
    }else{
        cb(new Error('Invalid file type. Only JPEG,PNG,and PDF are allowed'))
    }
}

const upload = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits: {fileSize: 5 * 1024 * 1024},
})



route.post("/adminlogin",AdminController.adminLogin)
route.post("/productsave", upload.array('file', 10) ,AdminController.productSave);

module.exports = route

