const zod = require("zod")

// for creating a new todo
const createtodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

// for updating a todo
const updatetodo = zod.object({
    id : zod.string()
})

module.exports = {
    createtodo : createtodo,
    updatetodo : updatetodo 
}