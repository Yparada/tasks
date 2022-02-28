import express, { json } from "express";
import morgan from "morgan";

//Import routes
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks'
import userRoutes from './routes/users';
import  userProjectsRoutes from './routes/userProjects';

//Init
const app = express();

//middkewares
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/userProjects', userProjectsRoutes);

export default app;