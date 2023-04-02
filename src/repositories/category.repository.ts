import db from "../../db/index"
import {Repository} from "./abstracts/repository";

export class CategoryRepository extends Repository {
    constructor() {
        super(db.categoryModel);
    }

    async getProducts(categoryIdentifier: string) {
        const category = await this.model.findOne({
            where: {
                identifier: categoryIdentifier
            },
            include: [{
                model: db.productModel,
            }]
        });

        return category.Products;
    }
}

