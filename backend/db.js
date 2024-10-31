const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect("mongodb://localhost:27017/todos")

const schema = mongoose.Schema;

const todoSchema = new schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}