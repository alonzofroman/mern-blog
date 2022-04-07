const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const path = require('path');
const compression = require('compression');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const store = new MongoDBStore({
    uri: process.env.MONGODB_URI || 'mongodb://localhost/mernblog',
    collection: 'mySessions',
});

store.on('error', (err) => {
    console.log(err);
})

const sess = {
    secret: 'secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secret: 'secret'
    },
    resave: false,
    saveUninitialized: true,
    store: store,
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

(async function start() {
    await server.start();
    server.applyMiddleware({ app });
})();

app.use(compression());
app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

db.once('open', () => {
    app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
});