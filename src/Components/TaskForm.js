import React, {useState} from "react";

function TaskForm () {

    const [task, setTask] = useState("")
    
    return (
       <form>
        <input type="text" placeholder="Add a task" />
        
       </form>
    );
    
}