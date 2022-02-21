import { Router } from 'express';
const router = Router();
import { getUsers, createUser } from '../controllers/user.controller';

console.log('Entra a get users 1');
router.get('/', getUsers);
router.post('/', createUser);

export default router;