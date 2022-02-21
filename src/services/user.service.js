import User from '../models/Users';

export async function getAll() {
    return await User.findAll();
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