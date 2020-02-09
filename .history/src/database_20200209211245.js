import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/tasker', { useNewUrlParser: true})

console.log('DB Connected');