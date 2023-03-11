const db = require("../../db/index");

const productModel = db.product;

async function getAll() {
    return await productModel.findAll();
}

async function findById(id) {
    // Or throw and error right here.
    return await productModel.findOne(id);
}

async function update(id, payload) {
    await productModel.updateOne({id}, payload);

    return await productModel.findById(id);
}

async function create(id, payload) {
    const newProduct = new productModel({...payload});

    return await newProduct.save();
}

async function remove(id) {
    await productModel.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    findById,
    create,
    update,
    remove
}