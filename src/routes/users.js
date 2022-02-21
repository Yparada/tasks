import { Router } from 'express';
const router = Router();
import { getUsers } from '../controllers/user.controller';

console.log('Entra a get users 1');
router.get('/', getUsers);

export default router;