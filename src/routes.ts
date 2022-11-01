import { Express, Request, Response } from 'express';
import { getIndexPage, postPage } from './controllers/index.controller';

function routes(app: Express) {

    // Example of routes chained
    app
        .route('/')
        .get(getIndexPage)
        .post(postPage)
        .put((req: Request, res: Response) => {
            return res.send("You made a PUT Request");
        })
        .delete((req: Request, res: Response) => {
            return res.send("You made a DELETE Request");
        });
}

export default routes;