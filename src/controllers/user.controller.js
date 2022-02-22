import User from "../models/Users";
import { success, error, errorGen } from '../common/response';
import { getAll, create, getById, update } from "../services/user.service";
import createError from 'http-errors';


export async function getUsers(req, res) {
    try {
        const users = await getAll();
        success(res, 200, 'user list', users);
    } catch (e) {
        error(res);
    }
}

export async function getUserById(req,res){
    try {
        const user = await getById(req.params.id);
        success(res, 200, 'User', user);
    } catch (e) {
        console.log(e);
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

export async function updateUser(req, res){
    try {
        const { id } = req.params;
        const user = await update(req);
        if(!user){
            console.log(user);
            return error(res, new createError.BadRequest());
        }
        success(res, 200, 'Update user', user);
    } catch (e) {
        console.log(e);
        error(res);
        
    }
}

