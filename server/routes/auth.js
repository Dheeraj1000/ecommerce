const express = require('express');
const router = express.Router();
const app = express();

const {signup , signin, signout} = require("../controller/auth");


router.post("/signup",signup);
router.post("/signin",signin);
router.get("/signout",signout);

router.get("/hello", (req,res) => {
    res.send("hello there");
})

module.exports = router;