import { Router } from 'express';
const router = Router();

import { createTask, getTask, getTaskById, deleteTask, updateTask } from '../controllers/tastk.controller';

// /api/task
router.post('/', createTask);
router.get('/', getTask);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

export default router;