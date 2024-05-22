import userModel from "../models/userModel.js";

export const register = async(req,res)=>{
    try {
       const newUser = new userModel(req.body)
       await newUser.save()
       return res.status(201).json({
        success:true,
        newUser
       })
    } catch (error) {
        return res.status(500).json({success:false,error})
    }
}

export const login =async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email,password})
        if(!user){
            return res.status(404).json("user not foud")
        }
        return res.status(200).json({user:{
          id:user._id,name:user.name,email:user.email
        }})
    } catch (error) {
        return res.status(500).json({success:false,error})
    }
}