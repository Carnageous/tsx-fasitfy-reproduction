import { FastifyInstance } from 'fastify';

export async function userRouter(fastify: FastifyInstance) {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: (request, reply) => {
      reply.code(200).send({ data: ['user1', 'a'] });
    },
  });
}
