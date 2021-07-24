//import login from './login';

export const loginPostRequestHandler = (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John', lastName: 'Maverick' }))
};

export const userGetRequestHandler = (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John', lastName: 'Maverick' }))
};