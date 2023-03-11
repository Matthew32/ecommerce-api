const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

/* GET programming languages. */
router.get('/', productController.get);

/* POST programming language */
router.post('/', productController.create);

/* PUT programming language */
router.put('/:id', productController.update);

/* DELETE programming language */
router.delete('/:id', productController.remove);

module.exports = router;