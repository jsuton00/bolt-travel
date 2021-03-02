const jsonServer = require('json-server');
const server = jsonServer.create();
const { db } = require('./data/index');
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
	console.log(`Localhost: http://localhost:${port}`);
});
