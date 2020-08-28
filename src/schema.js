const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
  hello: String!
}
type Mutation {
  newMovie(name: String): Movie
}

type Movie {
  name: String
}
`;

module.exports = typeDefs;
