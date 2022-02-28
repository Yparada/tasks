import UserProject from "../models/UserProjects";
import Project from "../models/Project";
import User from "../models/Users";

export async function getAll(){
    return await UserProject.findAll({
        include: [User, Project]
    });
}

export async function getByUser(req){
    const { userid } = req.params;
    const users = await UserProject.findAll({
        attributes: ['id'],
        include: Project,
        where: {
            userid
        }
    });
    return users;
}

export async function getByProject(req){
    const { projectid } = req.params;
    const projects = await UserProject.findAll({
        attributes: ['id'],
        include: User,
        where: {
            projectid
        }
    });
    return projects;
}