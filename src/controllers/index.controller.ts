import {Response} from 'express';

export class indexController {

    constructor() 
    {

    }

    getIndexPage = (response: Response) => {
        response.send("You made a GET Request");
    }

}
