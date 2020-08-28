const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const Query = require('./resolvers/Query');
const typeDefs = require('./schema');

const app = express();
mongoose.connect('mongodb://localhost/netflixClone', { useNewUrlParser: true, useUnifiedTopology: true });

const movieSchema = new mongoose.Schema({
  name: String,
});

const Movie = mongoose.model('Movie', movieSchema);

const avengers = new Movie({ name: 'The Avengers  ' });
avengers.save((err) => {
  if (err) return console.error(err);
});
const resolvers = {
  Query,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,

});
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () => console.log(`server ready at http:localhost:4000${server.graphqlPath}`));