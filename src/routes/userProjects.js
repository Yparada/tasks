import { Router } from 'express';
import { getUserProjects, getUsersProjectsByUser, getUserProjectsByProject } from '../controllers/userProject';
const router = Router();

router.get('/', getUserProjects);
router.get('/user/:userid', getUsersProjectsByUser);
router.get('/project/:projectid', getUserProjectsByProject);

export default router;