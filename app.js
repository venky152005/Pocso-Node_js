import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import verifyOtp from "./controller/User/otpVerify.js";
import sendOtp from "./controller/User/otp.js";
import sendMail from "./controller/User/mail.js";
import router from "./routes/route.js";

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://Venki_20ss:Venki_1505@alumni.b5ck8.mongodb.net/test");

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
})

mongoose.connection.on("error", (err) => {
    console.log("Error connecting to MongoDB", err);
})

mongoose.set('debug', true);

app.get("/", (req, res) => {
    res.json("Hello World!");
})

app.use('/api', router);
app.post('/send-mail', sendMail);
app.post('/send-otp', sendOtp);
app.post('/verify-otp', verifyOtp);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
