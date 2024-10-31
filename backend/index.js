const express = require("express");
const { createtodo, updatetodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.post("/todo", async function(req, res){
    const createpayload = req.body;
    const parsepaylaod = createtodo.safeParse(createpayload);
    if(!parsepaylaod.success){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
        return 
    }

     await todo.create({
        title : createpayload.title,
        description : createpayload.description,
        completed : false
    })
    res.json({
        msg : "todo created successfully"
    })
})

app.get("/todos",  async function(req, res){
    
    const todos = await todo.find()

    res.json({
        todos 
    })
})

app.put("/update", async function(req, res){
    const updatepayload = req.body;
    const parsepaylaod = updatetodo.safeParse(updatepayload)
    
    if(!parsepaylaod.success){
        res.status(411).json({
            msg : "you sent the wrong inputs"
        })
        return
    }

    await todo.updateMany({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg : "todo marked as completed"
    })
})

app.listen(3000, function(){
    console.log("server is listening on port 3000");
})