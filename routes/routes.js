import express from "express"
import signup from "../controller/signup.controller.js";
import login from "../controller/login.controller.js";
import getUser from "../controller/getUsers.controller.js";

const router = express.Router();


router.post('/signup', signup);
router.get('/login', login)
router.get('/user', getUser)








export default router;