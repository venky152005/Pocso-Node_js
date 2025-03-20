
import { mail } from "./user.js";
import nodemailer from "nodemailer";
import bodyparser from "body-parser";


bodyparser.json();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "venkatesh.s.23jitit209@gmail.com",
        pass: "ytip ejqw qciu dgtc"
    }
})

const sendMail = async () => {

    try{
        const student = await mail();
        

        if(!student){
            console.log('Student email not found'); 
        }
        const info = await transporter.sendMail({
            from: 'venkatesh.s.23jitit209@gmail.com',
            to: student,
            subject: "Hello World!",
            text: "This is a test email sent from Node.js using MongoDB.",
        })

        console.log('Email sent:', info.response);
    }
    catch(err){
        console.error('Error sending email',err);
        
    }
 
}

export default sendMail;