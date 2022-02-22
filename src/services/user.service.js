import User from '../models/Users';

export async function getAll() {
    return await User.findAll({
        attributes: ['id','name','email'],
        order: [
            ['id', 'ASC']
        ]
    });
}

export async function getById(id){
    const data = await User.findOne({
       attributes: ['id','name','email'],
       where: {
           id
       } 
    });
    return data;
}

export async function create(body) {
    const { name, email } = body;
    if(!name && !email){
        return null;
    }
    let newUser = await User.create({
        name,
        email
    }, {
        fields: ['name', 'email']
    });
    return newUser;
}

export async function update(req){
    const { id } = req.params;
    const { name, email } = req.body;
    const exist = await getById(id);
    if(exist){
        const user = await User.update({
            name,
            email
        }, {
            where: {
                id
            }
        });
        return user;
    }
    else{
        return null;
    }
}

export async function deleteById(id){
    const userDeleted = await User.destroy({
        where: {
            id
        }
    });
    return userDeleted;
}