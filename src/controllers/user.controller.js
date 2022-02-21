import User from "../models/Users";
import { success, error } from '../common/response';

export async function getUsers(req, res) {
    console.log('Entra a get users 3');
    try {
        const users = await User.findAll();
        success(res, 200, 'user list', users);
    } catch (e) {
        error(res);
    }
}

