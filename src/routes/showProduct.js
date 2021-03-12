const path = require('path');

const express = require('express');

const rootDir = require('../model/product');

const router = express.Router();

// const products = [];

// /admin/add-product => GET
router.get('/', (req, res, next) => {
  console.log('dd');
  const products = rootDir;
  console.log(products);
  res.render('layout', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;