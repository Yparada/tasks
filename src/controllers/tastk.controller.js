import Task from '../models/Tasks';

export async function createTask(req, res) {
    try {
        const { name, done, projectId } = req.body;
        const newTask = await Task.create({
            name,
            done,
            projectid: projectId
        }, {
            fields: ['name', 'done', 'projectid']
        });
        res.json({
            message: 'New task created'
        });
    } catch (error) {
        console.log(error);
    }
}

export async function getTask(req, res) {
    const tasks = await Task.findAll({
        attributes: ['id', 'projectid', 'name', 'done'], //order fields
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({
        message: 'Query success',
        data: tasks
    })

}

export async function updateTask(req, res) {
    const { id } = req.params;
    const {projectId, name, done } = req.body;

    const task = await Task.findOne({
        attributes: ['name','projectid','done','id'],
        where: {
            id
        }
    });

    const updatedTask = await Task.update({
        name,
        done,
        projectid: projectId
    },{
        where: {
            id
        }
    });

    res.json({
        message: 'Task updated',
        data: {
            taskUpdated: updatedTask
        }
    })

}

export async function deleteTask(req, res) {
    const { id } = req.params;
    const nRowDeleted = await Task.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Task deleted',
        data: {
            'rowtsDeleted': nRowDeleted
        }
    });

}

export async function getTaskById(req, res) {

}

export async function getTaskByProject(req, res) {

}