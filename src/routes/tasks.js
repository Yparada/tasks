import { Router } from 'express';
const router = Router();

import { createTask, getTask, deleteTask, updateTask } from '../controllers/tastk.controller';

// /api/task
router.post('/', createTask);
router.get('/', getTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;