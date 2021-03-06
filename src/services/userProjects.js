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
        },
        order: [
            ['id', 'ASC']
        ]
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

export async function create(req){
    const { userid, projectid  } = req.body;
    if( !userid && !projectid){
        return null;
    }
    let newUsProj = await UserProject.create({
        userid,
        projectid
    },{
        fields: ['userid','projectid']
    });
    return newUsProj;
}

export async function update(req){
    const { id } = req.params;
    const { userid, projectid } = req.body;
    const usrPrj = await UserProject.update({
        userid,
        projectid
    },{
        where: {
            id
        }
    });
    return usrPrj;
}

export async function deleteUsrProject(req){
    const { id } = req.params;
    const userProject = await UserProject.destroy({
        where: {
            id
        }
    });

    return userProject;
}