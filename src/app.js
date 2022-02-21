import express, { json } from "express";
import morgan from "morgan";

//Import routes
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks'
import userRoutes from './routes/users';

//Init
const app = express();

//middkewares
app.use(morgan('dev'));
app.use(json());

//Routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

export default app;