const router=require("express").Router();
const Cordinate = require("../models/Cordinate");
const User = require("../models/Cordinate");
router.post('/',async (req,res)=>{
    console.log("her")
    console.log(req.body)
    const newCordinate = new Cordinate({
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })
    try{
        const savedCordinate = await newCordinate.save();
        res.status(201).json(savedCordinate);
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/',async(req,res)=>{
    try{
        const cordinates = await Cordinate.find();
        res.status(200).json(cordinates);

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;