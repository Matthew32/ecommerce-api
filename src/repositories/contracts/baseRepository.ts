import {Model} from "sequelize";

export interface BaseRepository {
    instanceModel(model: Model);

    getAll();

    findById(id)

    update(id, payload);

    create(payload);

    remove(id);
}