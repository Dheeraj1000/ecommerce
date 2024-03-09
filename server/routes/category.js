const express = require('express');
const router = express.Router();
const app = express();

const {create,categoryById,read,update,remove, list} = require("../controller/category");
const {requireSignin, isAuth, isAdmin} = require("../controller/auth");
const {userById} = require("../controller/user");


router.get('/category/:categoryId', read)
router.post("/category/create/:userId", requireSignin, isAdmin, create);

router.param('userId', userById);
router.param('categoryId', categoryById);

router.put("/category/:categoryId/:userId", requireSignin, isAdmin, update);
router.delete("/category/:categoryId/:userId", requireSignin, isAdmin, remove);

router.get('/categories', list);

module.exports = router;