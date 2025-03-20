import Admin from "../../model/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async(req, res)=>{
    try {
        console.log("Received Data:", req.body); 

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
          }

        const hashedpassword = await bcrypt.hash(password, 10);
        const adminUser = new Admin({ username, email, password: hashedpassword});
        console.log(adminUser);
        await adminUser.save();
        
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}