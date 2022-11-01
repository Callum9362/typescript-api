import {Response, Request} from 'express';
import db from '../db';

export const getIndexPage = (request: Request, response: Response) => {
    response.send("You made a GET Request");
}

export const postPage = (request: Request, response: Response) => {
    db.set("Test", "5")
    return response.send("You made a POST Request");
}


