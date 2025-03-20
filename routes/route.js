import { Router } from "express";
import { addStudent, listStudent, updateStudent, deleteStudent } from "../controller/User/user.js";
import { login } from "../controller/admin/login.js";
import { signUp } from "../controller/admin/signUp.js";

const router = Router();

router.post('/add', addStudent);
router.get('/list', listStudent);
router.post('/update', updateStudent);
router.post('/delete', deleteStudent);
router.post('/login',login);
router.post('/signup',signUp)

export default router;