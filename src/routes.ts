import {Express, Request, Response} from 'express';
import { IndexController } from './controllers/index.controller';

function routes(app: Express){

    // Example of routes chained
    app.route('/')
    .get(IndexController.getIndexPage(res: Response))
    
    .post((req: Request, res: Response) => {
        return res.send("You made a POST Request");
    })
    .put((req: Request, res: Response) => {
        return res.send("You made a PUT Request");
    })
    .delete((req: Request, res: Response) => {
        return res.send("You made a DELETE Request");
    });

    // Example of a dynmic route with params
    app.route('/api/books/:bookID')
    .get((req: Request, res: Response) => {
        console.log(req.params.bookID);
        return res.send(req.params);
    });

    // Example of a route using a method
    function handleGetBookByAuthorID (req: Request, res: Response) {
    console.log(req.params.bookID);
    return res.send(req.params);
    };
    app.get('/api/books/:bookID/:authorID', handleGetBookByAuthorID);

    // Error handling
    async function throwsError() {
    throw new Error('Boom!');
    }

    app.get('/error', async (req, res) => {

    try {
        await throwsError();
        res.sendStatus(200);
    }
    catch(e){
        res.status(400).send('Something went wrong');
    }

    });

}

export default routes;