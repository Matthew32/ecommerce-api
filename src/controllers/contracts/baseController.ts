export interface BaseController {
    get(req, res, next);

    findOne(req, res, next);

    create(req, res, next);

    update(req, res, next);

    remove(req, res, next);
}