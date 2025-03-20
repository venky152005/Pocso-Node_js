import Admin from "../../model/adminModel.js";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
   try {
    const{ email, password }= req.body;

    let admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if(!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({id: admin._id},process.env.JWT_SECRET, { expiresIn:"1h"})

    res.json({ message: "Login successful", token });
   } catch (error) {
    res.status(500).json({ error: error.message });
   }
   
}