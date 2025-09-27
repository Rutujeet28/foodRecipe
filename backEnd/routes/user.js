const express = require("express")
const router = express.Router()
const {userLogin, userSignUp, getUser} = require("../controller/user")

router.post("/signUp", userSignUp)
router.post("/login", userLogin)
router.post("/user/:id", getUser)

module.exports = router