const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001

const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
    app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
});