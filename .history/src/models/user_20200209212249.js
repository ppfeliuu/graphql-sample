import {Schema, model } from "mongoose";

new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    age: Number
})