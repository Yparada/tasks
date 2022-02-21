import { InternalServerError, BadRequest } from 'http-errors';

export function success (res, status, message, body) {
    res.status(status).json({ message, body });
}



export function error (res, err){
    const { statusCode, message } = err ? err : new InternalServerError();
    res.status(statusCode).json({message});
}