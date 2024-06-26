"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Weather {
    temperature: Float
    description: String
    rain: Float
  }

  type Query {
    weather(latitude: Float!, longitude: Float!): Weather
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map