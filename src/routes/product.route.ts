import {ProductController} from "../controllers/product.controller";
import {Router} from "express";

const router = Router();

const productController = new ProductController();

router.get('/', productController.get);

router.get('/:id', productController.findOne);

router.post('/', productController.create);

router.put('/:id', productController.update);

router.delete('/:id', productController.remove);

export default router;