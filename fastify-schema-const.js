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
						msg: { const: "hello world" },
					},
				},
			},
		},
	},
	(req, reply) => {
		reply.send({ msg: "hello world" });
	}
);

fastify.listen({ port: 3002 });
