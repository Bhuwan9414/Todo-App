import { useState } from "react";

export function CreateTodos(){

    const [title, settitle] = useState("")
const [description, setdescription] = useState("")

    return <div>
       
        <input id="title"
         type="text" 
        placeholder="title"
        onChange={function(e){
            const value = e.target.value;
            settitle(e.target.value);
        }}
        />

        <br /> <br />

   
        <input id="description"
        type="text"
        placeholder="description" 
        onChange={function(e){
            const value = e.target.value;
            setdescription(e.target.value);
        }}/>

        <br /> <br />

        <button
        onClick={() => {
            fetch("http://localhost:3000/todo",{
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "content-Type" : "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                // alert("todo added")
            })
        }}>add a todo</button>

       
    </div>
}