import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Weather {
    temperature: Float
    description: String
    rain: Float
  }

  type Query {
    weather(latitude: Float!, longitude: Float!): Weather
  }
`;

export default typeDefs;
