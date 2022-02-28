import { error, success } from "../common/response";
import { getAll, getByUser, getByProject, create, update, deleteUsrProject } from "../services/userProjects";
import createError from 'http-errors';

export async function getUserProjects(req, res){
    try {
        const userProjects = await getAll();
        success(res, 200, 'Users projects list', userProjects);
    } catch (e) {
        error(res);
        
    }
}

export async function getUsersProjectsByUser(req, res){
    try {
        const users = await getByUser(req);
        success(res, 200, 'Users-projects by user', users);
    } catch (e) {
        error(res);
        
    }
}

export async function getUserProjectsByProject(req, res){
    try {
        const usersProjects = await getByProject(req);
        success(res, 200, 'Users-Projects by Projects',usersProjects);
    } catch (e) {
        console.log(e);
        error(res);
    }
}

export async function createUserProject(req, res){
    try {
        const usrPrj = await create(req);
        success(res, 200, 'Create relation', usrPrj);
    } catch (e) {
        error(res);
    }
}

export async function updateUserProject(req, res){
    try {
        const usrPrj = await update(req);
        if(!usrPrj){
            return error(res, new createError.BadRequest());
        }
        success(res, 200, 'Update relation', usrPrj);
    } catch (e) {
        error(res);
    }
}

export async function deleteUserProject(req, res){
    try {
        const userProject = await deleteUsrProject(req);
        success(res, 200, 'Delete relation', userProject);
    } catch (e) {
        error(res);
    }
}