const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const path = require('path');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/images/{file*}',
    handler: {
      directory: {
        path: path.join(__dirname, '../public/images'),
        redirectToSlash: true,
        index: false,
      },
    },
  });

  try {
    server.route(routes);
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
  } catch (err) {
    console.error('Failed to start server:', err.message);
    process.exit(1);
  }
};

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
  process.exit(1);
});

init();
