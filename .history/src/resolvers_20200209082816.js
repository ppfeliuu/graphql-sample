export const resolvers = {

    Query: {
        hello: () => { return 'Hola'},
        greet(root, args) {
            console.log(args);
            return 'Hello';
        }
    }

};