import db from "../../db/index"

const productModel = db.productModel;

export class ProductRepository {
    async getAll() {
        return await productModel.findAll();
    }

    async findById(id) {
        // Or throw and error right here.
        return await productModel.findOne(id);
    }

    async update(id, payload) {
        var product = await productModel.findOne(id);
        if (product) {
            await product.update(payload);

            return await productModel.findOne(id);
        }

        return null;
    }

    async create(payload) {
        return productModel.create({...payload});
    }

    async remove(id) {
        return await productModel.destroy({
            where: {
                id: id
            }
        }) > 0;
    }
}