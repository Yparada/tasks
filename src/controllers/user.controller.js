import User from "../models/Users";
console.log('Entra a get users 2');


export async function getUsers(req, res){
    console.log('Entra a get users 3');
    try {
        console.log('Entra a get users 4');
        const users = await User.findAll();
        res.json({
            message: 'Query success',
            data: {
                users
            }
        });
    } catch (error) {
        console.log(error);
        
    }
}

