const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const productsController=require('../controllers/products')

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',productsController.getAddproduct );

// /admin/add-product => POST
router.post('/add-product', productsController.getAddproduct);

module.exports=router;
