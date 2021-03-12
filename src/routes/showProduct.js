const path = require('path');

const express = require('express');

const rootDir = require('../model/product');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/', (req, res, next) => {
  res.render('layout', {
    // pageTitle: 'Add Product',
    path: '/view/layout',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('../view/layout', (req, res, next) => {
  products.push({ });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
