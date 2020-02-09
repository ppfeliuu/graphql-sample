import { task } from './sample'

import User from './models/user'

export const resolvers = {

    Query: {
        hello: () => { return 'Hola'},
        greet(root, {name}, ctx) {

            console.log(ctx);
            return `Hi ${name}`;
        },
        task() {
            return task;
        },
        async Users() {
            return await User.find();
        }
    },
    Mutation : {
        createTask(_, {input}) {
            input._id = task.length;
            task.push(input);
            return input;
        },
        async createUser(_, {input}) {
            const newUser = new User(input)
            await newUser.save();
            return newUser;
        },
        async deleteUser(_, {_id}) {
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id, input}) {
            return await User.findByIdAndUpdate(_id, input)
        }
    }

};