import Complaint from "../../model/model.js";

const verifyOtp = async(req,res) => {
    const { email, otp } = req.body;

    const user = await Complaint.findOne({email})

    if(!user){
        res.json({
            "Error": "User not found"
        })
    }

    if(user.otp.toUpperCase() === otp.toUpperCase()){
        user.isVerified = true;
        user.otp = null;
        await user.save();
        res.json({"Status": "Otp verified successfully",
        "success": true
        })
    }
    else{
        res.json({"Error": "Invalid Otp"})
    }

}

export default verifyOtp;