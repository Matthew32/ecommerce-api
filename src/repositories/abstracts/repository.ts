import {Model} from "sequelize";
import {BaseRepository} from "../contracts/baseRepository";

export abstract class Repository implements BaseRepository {
    protected constructor(protected model = null) {
    }

    instanceModel(model: Model) {
        this.model = model;
    }

    async getAll() {
        return await this.model.findAll();
    }

    async findById(id) {
        return await this.model.findByPk(id);
    }

    async update(id, payload) {
        var row = await this.model.findByPk(id);
        if (row) {
            await row.update(payload);

            return await this.model.findByPk(id);
        }

        return null;
    }

    async create(payload) {
        return this.model.create({...payload});
    }

    async remove(id) {
        return await this.model.destroy({
            where: {
                id: id
            }
        });
    }
}