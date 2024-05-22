import mongoose,{ Schema } from "mongoose";

const user = new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required and should be unique"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
},{
    timestamps:true
})

export default mongoose.model("User",user)