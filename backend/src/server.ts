import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolver';

const PORT = process.env.PORT || 4000;

const app = express();


async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}/graphql`)
);