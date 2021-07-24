import { rest } from 'msw';
import  { loginPostRequestHandler, userGetRequestHandler} from './login' 


export const handlers = [
    rest.get('/login', loginPostRequestHandler),
    rest.get('/user', userGetRequestHandler),
];


//worker.start();