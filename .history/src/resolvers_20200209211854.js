import { task } from './sample'

export const resolvers = {

    Query: {
        hello: () => { return 'Hola'},
        greet(root, {name}, ctx) {

            console.log(ctx);
            return `Hi ${name}`;
        },
        task() {
            return task;
        }
    },
    Mutation : {
        createTask(_, {input}) {
            input._id = task.length;
            task.push(input);
            return input;
        }
    }

};