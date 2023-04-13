export abstract class Model {
    static setUpBelongsToManyRelation(model, foreignModel, table: string, foreignKey: string) {
        model.belongsToMany(foreignModel, {through: table, foreignKey: foreignKey});

        return model;
    }

    private define(sequelize, modelName, modelDeclaration, tableName, hooks = null, instanceMethods = null) {
        return sequelize.define(
            modelName,
            modelDeclaration,
            {
                freezeTableName: true,
                tableName: tableName,
                hooks: hooks,
                instanceMethods: instanceMethods
            });
    }

    instanceModel(sequilize, modelName, modelDeclaration, tableName, relations = null, hooks = null, instanceMethods = null) {
        var self = this;

        let model = this.define(sequilize, modelName, modelDeclaration, tableName, hooks, instanceMethods);
        if (relations && relations.belongsToMany && relations.belongsToMany.length > 0) {
            model = Model.setUpRelations(model, relations.belongsToMany);
        }
        return model;
    }

    static setUpRelations(model, belongsToMany) {
        if (belongsToMany) {
            belongsToMany.forEach(function (relationModel) {
                model = Model.setUpBelongsToManyRelation(model, relationModel.model, relationModel.tableName, relationModel.foreignKey);
            })
        }
        return model;
    }

    abstract init(sequelize, relations);
}