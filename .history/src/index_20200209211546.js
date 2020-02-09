import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import { connect } from './database';


const app = express();
connect();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(8000, () => console.log('Server OK'));