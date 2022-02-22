import { Router } from 'express';
const router = Router();
import { getUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/user.controller';

console.log('Entra a get users 1');
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;