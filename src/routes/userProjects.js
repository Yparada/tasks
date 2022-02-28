import { Router } from 'express';
import { getUserProjects, getUsersProjectsByUser, getUserProjectsByProject, createUserProject, updateUserProject, deleteUserProject } from '../controllers/userProject';
const router = Router();

router.get('/', getUserProjects);
router.get('/user/:userid', getUsersProjectsByUser);
router.get('/project/:projectid', getUserProjectsByProject);
router.post('/', createUserProject);
router.put('/:id', updateUserProject);
router.delete('/:id', deleteUserProject);

export default router;