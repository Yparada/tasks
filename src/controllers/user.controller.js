import User from "../models/Users";
import { success, error, errorGen } from '../common/response';
import { getAll, create } from "../services/user.service";
import createError from 'http-errors';


export async function getUsers(req, res) {
    console.log('Entra a get users 3');
    try {
        const users = await getAll();
        success(res, 200, 'user list', users);
    } catch (e) {
        error(res);
    }
}

export async function createUser(req, res){
    try {
        let newUser = await create(req.body);
        if(!newUser){
            return error(res, new createError.BadRequest);
        }
        success(res, 201, 'Create user', newUser);
    } catch (e) {
        error(res);
    }
}

