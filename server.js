const app = require('fastify')({ logger: true });
const items = require('./Item');
const itemRoutes = require('./routes/items');

app.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'fastify-api',
    },
  },
});

app.register(itemRoutes);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await app.listen(PORT);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();
