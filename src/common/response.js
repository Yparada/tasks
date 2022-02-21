import { InternalServerError } from 'http-errors';

export function success (res, status, message, body) {
    res.status(status).json({ message, body });
}

export function error (res){
    const { statusCode, message } = new InternalServerError();
    res.status(statusCode).json({message});
}