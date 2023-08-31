import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    console.log('Soy un Middleware');
    next();
}

export { logMiddleware }