export const resolvers = {

    Query: {
        hello: () => { return 'Hola'},
        greet(root, {name}) {
            console.log(name);
            return `Hi ${name}`;
        }
    }

};