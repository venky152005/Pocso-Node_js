import nodemailer from "nodemailer";
import Complaint from "../../model/model.js";
import crypto from "crypto";
import bodyparser from "body-parser";

bodyparser.json();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "venkatesh.s.23jitit209@gmail.com",
        pass: "ytip ejqw qciu dgtc"
    }
})

function generateOtp(){
    return crypto.randomBytes(3).toString('hex').toUpperCase();
}

async function sendOtpviaEmail(email, otp){
    const mailoptions = {
        from: 'venkatesh.s.23jitit209@gmail.com',
        to: email,
        subject: "Hello World!",
        text: `Your OTP is ${otp}`
    }

    await transporter.sendMail(mailoptions);
}

const sendOtp = async (req,res) => {
    const { email } = req.body;

    const otp = generateOtp();
    console.log(otp);
    
    const user = await Complaint.findOneAndUpdate(
        { email }, 
        { 
          otp,
          isVerified: false
        },
        {upsert: true, new: true}
    )
    console.log(user);
    

    await sendOtpviaEmail(email, otp);

    res.json({
        "status": "Otp sent successfully",
        "success": true
    });
    
}

export default sendOtp;