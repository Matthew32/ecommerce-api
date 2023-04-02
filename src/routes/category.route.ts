import {CategoryController} from "../controllers/category.controller";
import {Router} from "express";

const router = Router();

const categoryController = new CategoryController();

router.get('/', categoryController.get);

router.get('/:id', categoryController.findOne);

router.post('/', categoryController.create);

router.put('/:id', categoryController.update);

router.delete('/:id', categoryController.remove);

router.get('/:categoryIdentifier/products', categoryController.getProducts);

export default router;