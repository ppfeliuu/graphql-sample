export const resolvers = {

    Query: {
        hello: () => { return 'Hola'},
        greet(root, args) {
            console.log(args.name);
            return `Hi ${args.name}`;
        }
    }

};