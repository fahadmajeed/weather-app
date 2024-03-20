"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = __importDefault(require("./schema"));
const resolver_1 = __importDefault(require("./resolver"));
const PORT = process.env.PORT || 4000;
const app = (0, express_1.default)();
async function startServer() {
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolver_1.default,
    });
    await server.start();
    server.applyMiddleware({ app });
}
startServer();
app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}/graphql`));
//# sourceMappingURL=server.js.map