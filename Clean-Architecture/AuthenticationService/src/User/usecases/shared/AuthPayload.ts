import { Uuid } from "../../../Shared/entities/Uuid";
import { Role } from "../../entities/Role";

export class AuthPayload {

    private _userId: Uuid
    private _email: string
    private _roles: Array<Role>

    constructor(userId: Uuid, email: string, roles: Array<Role>) {
        this._userId = userId
        this._email = email
        this._roles = roles
    }
}