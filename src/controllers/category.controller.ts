import {CategoryRepository} from "../repositories/category.repository";
import {BaseController} from "./contracts/baseController";

const categoryRepository = new CategoryRepository();

export class CategoryController implements BaseController {
    async get(req, res, next) {
        try {
            return res.json(await categoryRepository.getAll());
        } catch (err) {
            console.error(err.message);
            next(err);
        }
    }

    async findOne(req, res, next) {
        try {
            return res.json(await categoryRepository.findById(req.params.id));
        } catch (err) {
            console.error(`Error while deleting programming language`, err.message);
            next(err);
        }
    }

    async create(req, res, next) {
        try {
           return  res.json(await categoryRepository.create(req.body));
        } catch (err) {
            console.error(`Error while creating programming language`, err.message);
            return next(err);
        }
    }

    async update(req, res, next) {
        try {
            return res.json(await categoryRepository.update(req.params.id, req.body));
        } catch (err) {
            console.error(`Error while updating programming language`, err.message);
            return next(err);
        }
    }

    async remove(req, res, next) {
        try {
            return res.json(await categoryRepository.remove(req.params.id));
        } catch (err) {
            console.error(`Error while deleting programming language`, err.message);
            return next(err);
        }
    }

    async getProducts(req, res, next) {
        try {
            return res.json(await categoryRepository.getProducts(req.params.categoryIdentifier));
        } catch (err) {
            console.error(`Error while creating programming language`, err.message);
            return next(err);
        }
    }
}