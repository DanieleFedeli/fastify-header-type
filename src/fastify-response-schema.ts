import Fastify from "fastify";
import { JsonSchemaToTsProvider } from "@fastify/type-provider-json-schema-to-ts";

const fastify = Fastify().withTypeProvider<JsonSchemaToTsProvider>();

const schema = {
	type: "object",
	properties: {
		name: {
			type: "string",
		},
	},
	required: ["name"],
} as const;

fastify.get(
	"/",
	{
		schema: {
			headers: schema,
			params: schema,
			querystring: schema,
			body: schema,
		},
	},
	(req, reply) => {
		const fromParams = req.params.name;
		//    ^? TypeScript: fromParams is string
		const fromHeader = req.headers.name;
		//    ^? TypeScript: fromHeader is any
		const headers = req.headers;
		//    ^? TypeScript: headers is any
		const fromQs = req.query.name;
		//    ^? TypeScript: fromHeader is string
		const fromBody = req.body.name;
		//    ^? TypeScript: fromBody is string
	}
);

fastify.route({
	url: "/",
	method: "GET",
	schema: {
		headers: schema,
		params: schema,
		querystring: schema,
		body: schema,
	},
	handler: (req, reply) => {
		const fromParams = req.params.name;
		//    ^? TypeScript: fromParams is string
		const fromHeader = req.headers.name;
		//    ^? TypeScript: fromHeader is any
		const headers = req.headers;
		//    ^? TypeScript: headers is any
		const fromQs = req.query.name;
		//    ^? TypeScript: fromHeader is string
		const fromBody = req.body.name;
		//    ^? TypeScript: fromBody is string
	},
});
