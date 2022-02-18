import { Router } from 'express';
const router = Router();

import { createTask, getTask, deleteTask } from '../controllers/tastk.controller';

// /api/task
router.post('/', createTask);
router.get('/', getTask);
router.delete('/:id', deleteTask);

export default router;