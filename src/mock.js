import setupServer from 'msw/node';

const server = setupServer([...handlers]);

server.start({
    onUnhandledRequest: 'warn',
});
