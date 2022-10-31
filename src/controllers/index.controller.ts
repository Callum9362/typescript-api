import {Response} from 'express';

export class IndexController {

    constructor() 
    {

    }

    getIndexPage = (response: Response) => {
        response.send("You made a GET Request");
    }

}
