import mongoose from "mongoose";

const admin = new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
    },
   password:{
    type:String,
   }
   
})

const Admin = mongoose.model("Admin",admin);

export default Admin;