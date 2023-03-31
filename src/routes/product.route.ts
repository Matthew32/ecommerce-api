import { Router } from "express";
import {ProductController} from "../controllers/product.controller";

const router = Router();
const productController = new ProductController();

/* GET programming languages. */
router.get('/', productController.get);

router.get('/:id', productController.findOne);

/* POST programming language */
router.post('/', productController.create);

/* PUT programming language */
router.put('/:id', productController.update);

/* DELETE programming language */
router.delete('/:id', productController.remove);

export default router;