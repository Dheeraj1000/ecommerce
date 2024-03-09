const express = require('express');
const router = express.Router();
const app = express();

const {create, productById, read, remove, update, list, listRelated, listCategories,listSearch, listBySearch, photo} = require("../controller/product");
const {requireSignin, isAuth, isAdmin} = require("../controller/auth");
const {userById} = require("../controller/user");


router.get('/product/:productId', read)
router.post("/product/create/:userId", requireSignin, isAdmin, create);
router.delete('/product/:productId/:userId',requireSignin, isAdmin, remove)
router.put("product/:productId/:userId", requireSignin, isAdmin, update);

router.param('userId', userById);
router.param('productId', productById);

router.get('/products', list);
router.get('/products/search', listSearch)
router.get('/products/related/:productId', listRelated)
router.get('/products/categories', listCategories)
router.post('/products/by/search', listBySearch)
router.get('/product/photo/:productId', photo)

module.exports = router;