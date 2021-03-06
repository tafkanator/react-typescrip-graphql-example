import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import path from 'path';
import { buildSchema } from 'type-graphql';

export default async function createGraphqlServer(app: express.Express) {
	const schema = await buildSchema({
		resolvers: [path.join(__dirname, '..', 'entities', '*.ts'), path.join(__dirname, '..', 'resolvers', '*.ts')],
	});
	const server = new ApolloServer({ schema });

	server.applyMiddleware({ app });

	return server;
}
