import Fastify from "fastify";

const fastify = Fastify();

fastify.post(
	"/",
	{
		schema: {
			response: {
				200: {
					type: "object",
					properties: {
						msg: { type: "string" },
					},
				},
			},
		},
	},
	(req, reply) => {
		reply.send({ msg: "hello world" });
	}
);

fastify.listen({ port: 3001 });
