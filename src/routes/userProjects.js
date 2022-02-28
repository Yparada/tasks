import { Router } from 'express';
import { getUserProjects, getUsersProjectsByUser, getUserProjectsByProject, createUserProject, updateUserProject } from '../controllers/userProject';
const router = Router();

router.get('/', getUserProjects);
router.get('/user/:userid', getUsersProjectsByUser);
router.get('/project/:projectid', getUserProjectsByProject);
router.post('/', createUserProject);
router.put('/:id', updateUserProject);

export default router;