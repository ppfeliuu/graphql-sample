import { task } from './sample'

export const resolvers = {

    Query: {
        hello: () => { return 'Hola'},
        greet(root, {name}) {
            console.log(name);
            return `Hi ${name}`;
        },
        task() {
            return task;
        }
    },
    Mutation : {
        createTask(_, {input}) {
            console.log(input);
            return null;
        }
    }

};