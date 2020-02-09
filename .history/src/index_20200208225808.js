import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();



app.use('/graphql', graphqlHTTP({
    graphiql: true
}));

app.listen(8000, () => console.log('Server OK'));