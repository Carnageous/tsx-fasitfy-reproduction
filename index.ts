import Fastify from 'fastify';
import { userRouter } from './users';

export const api = Fastify({
  logger: true,
});

api.get('/', (request, reply) => {
  reply.send({ name: 'fastify-typescript' });
});

api.register(userRouter, { prefix: '/users' });

async function startAPI() {
  try {
    await api.listen({ port: 9001 });
  } catch (err) {
    api.log.error(err);
  }
}

startAPI();
