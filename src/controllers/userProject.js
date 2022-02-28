import { error, success } from "../common/response";
import { getAll, getByUser, getByProject } from "../services/userProjects";

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