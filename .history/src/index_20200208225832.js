import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();

const schema = {};

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(8000, () => console.log('Server OK'));