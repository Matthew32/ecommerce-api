import db from "../../db/index"
import {Repository} from "./abstracts/repository";

export class ProductRepository extends Repository{
    constructor() {
        super(db.productModel);
    }
}