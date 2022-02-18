import { Router } from 'express';
const router = Router();

import { createProject, getProjects, getProjectById, deleteProject, updateProject } from '../controllers/project.controller';

// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;