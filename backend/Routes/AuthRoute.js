const express = require("express")
const { Signup, Login } = require("../Controllers/AuthController")
const { userVerification } = require("../Middleware/AuthMiddleware")

const router = express.Router()

router.post("/signup",Signup)
router.post("/login" ,Login)
router.post("/auth",userVerification)


module.exports = router