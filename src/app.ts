import express, {NextFunction, Request, Response} from 'express';
import routes from './routes';

const app = express();

// Set what data your post requests accept.
app.use(express.json()); // JSON
//app.use(express.urlencoded({ extended: true})); // x-www-form-urlencoded

routes(app);

// Ignore this just console 
app.listen(3000, () => {
    console.log("Application running at http://localhost:3000")
});