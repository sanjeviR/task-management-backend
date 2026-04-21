import express, {Request,Response} from 'express';
import cors from 'cors'
import helmet from 'helmet';
import dotenv from 'dotenv';
import prisma from './configs/db'; //db connection
import userRoutes from './routes/user-routes';
import projectRoutes from './routes/project-routes';
import taskRoutes from './routes/task-routes';
import dashboardRoutes from './routes/dashboard-routes';
import './workers/email-worker'


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(helmet()); //security
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users',userRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);
app.use('/api/dashboard',dashboardRoutes);


app.get('/',async(req:Request,res:Response)=>{
    try{
        await prisma.$queryRaw`SELECT 1`;
        res.status(200).json({message:'server is running and DB connected'})
    }catch(e){
        res.status(500).json({message:'Database connection failed!',e})
    }
});

app.listen(PORT,()=>{
    console.log(`server listnening on PORT ${PORT}`);
});
