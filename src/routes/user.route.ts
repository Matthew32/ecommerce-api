import {UserController} from "../controllers/user.controller";
import {Router} from "express";

const router = Router();

const userController = new UserController();

router.get('/', userController.get);

router.get('/:id', userController.findOne);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.delete('/:id', userController.remove);

export default router;