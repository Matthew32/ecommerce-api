import {ProductRepository} from "../repositories/product.repository";
import {BaseController} from "./contracts/baseController";

const productRepository = new ProductRepository();

export class ProductController implements BaseController {
    async get(req, res, next) {
        try {
            res.json(await productRepository.getAll());
        } catch (err) {
            console.error(err.message);
            next(err);
        }
    }

    async findOne(req, res, next) {
        try {
            res.json(await productRepository.findById(req.params.id));
        } catch (err) {
            console.error(`Error while deleting programming language`, err.message);
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            res.json(await productRepository.create(req.body));
        } catch (err) {
            console.error(`Error while creating programming language`, err.message);
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            res.json(await productRepository.update(req.params.id, req.body));
        } catch (err) {
            console.error(`Error while updating programming language`, err.message);
            next(err);
        }
    }

    async remove(req, res, next) {
        try {
            res.json(await productRepository.remove(req.params.id));
        } catch (err) {
            console.error(`Error while deleting programming language`, err.message);
            next(err);
        }
    }
}