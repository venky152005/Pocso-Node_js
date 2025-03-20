import mongoose from "mongoose";

const complaints = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
    },
   incidentdetails:{
        type:String,
    },
    location:{
        type:String,
    },
    otp:{
        type:String
    },
    isVerified: {
        type: Boolean,
        default: false,
      },
})

const Complaint = mongoose.model("Complaint",complaints);

export default Complaint;