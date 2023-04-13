import db from "../../db/index"
import {Repository} from "./abstracts/repository";

export class UserRepository extends Repository {
    constructor() {
        super(db.userModel);
    }
}